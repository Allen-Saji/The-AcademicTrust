const asyncHandler = require("express-async-handler");
const Enrollment = require("../models/enrollmentModel");
const Result = require("../models/resultModel");
const Student = require("../models/studentModel");
const Course = require("../models/courseModel");
const Exam = require("../models/examModel");

const getEligibleStudents = asyncHandler(async (req, res) => {
  try {
    const { year_of_adm } = req.body;
    // Fetch all students with the same year_of_adm value
    const students = await Student.find({ year_of_adm });
    // console.log(students);

    // Filter the eligible students
    const eligibleStudents = [];

    for (const student of students) {
      const student_id = student.registration_no;
      //console.log(student_id);

      // Get enrollments for the student
      const enrollments = await Enrollment.find({ student_id });
      //console.log(enrollments);

      // Check if enrollments exist
      if (enrollments.length === 0) {
        continue;
      }

      // Get results for the enrollments
      const results = await Result.find({
        enrollment_id: enrollments.map((enrollment) => enrollment.id),
      });

      // Check if results exist
      if (results.length === 0) {
        continue;
      }

      // Check if any results have grade F
      const hasFGrade = results.some((result) => result.grade === "F");

      // If no F grade found, the student is eligible
      if (!hasFGrade) {
        eligibleStudents.push(student);
      }
    }
    //console.log(eligibleStudents);
    res.status(200).json(eligibleStudents);
  } catch (error) {
    throw new Error(error.message);
  }
});

const getCertificateDetails = async (req, res) => {
  try {
    const { students } = req.body;
    const responses = await Promise.all(
      students.map(async (student) => {
        const registration_no = student.registration_no;
        const institution = student.institution;
        const year_of_adm = student.year_of_adm;
        const student_name = student.name;

        const subjectNamesBySemester = [];
        const subjectCreditsBySemester = [];
        const subjectGradesBySemester = [];
        const subjectExamMonthsBySemester = [];
        const subjectExamYearsBySemester = [];

        const cgpaEachSem = [];

        for (let i = 1; i <= 8; i++) {
          // Retrieve enrollments for the student and semester
          const student_id = student.registration_no;
          const semester = i;

          const enrollments = await Enrollment.find({
            student_id,
            semester,
          });

          const courseIds = [];
          enrollments.forEach((enrollment) => {
            courseIds.push(enrollment.course_id);
          });

          const courses = await Course.find({
            courseCode: { $in: courseIds },
          });

          const courseNames = courses.map((course) => course.name);
          const courseCredits = courses.map((course) => course.credits);

          subjectNamesBySemester.push(courseNames);
          subjectCreditsBySemester.push(courseCredits);

          // Retrieve results for the enrollments
          const results = await Result.find({
            enrollment_id: {
              $in: enrollments.map((enrollment) => enrollment._id),
            },
          });

          const subjectMarks = results.map((result) => result.marks);
          let marks = 0;
          subjectMarks.forEach((mark) => {
            marks = marks + mark;
          });

          let cgpa = marks / (subjectMarks.length * 10);
          cgpa = parseFloat(cgpa.toFixed(2));
          cgpaEachSem.push(cgpa);

          const subjectGrades = results.map((result) => result.grade);
          subjectGradesBySemester.push(subjectGrades);

          const examIds = results.map((result) => result.exam_id);
          const exams = await Exam.find({ _id: { $in: examIds } });

          function getMonthName(monthNumber) {
            const date = new Date();
            date.setMonth(monthNumber - 1); // Adjust month to 0-11 range
            const monthName = date.toLocaleString("default", { month: "long" });
            return monthName;
          }

          const examMonths = [];
          const examYears = [];
          let examMonth;
          let examYear;
          exams.forEach((exam) => {
            const date = new Date(exam.date);
            examMonth = date.getMonth() + 1; // Output: month as a number (0-11)
            examYear = date.getFullYear(); // Get the year
          });
          const monthName = getMonthName(examMonth);

          for (k = 0; k < results.length; k++) {
            examMonths.push(monthName);
            examYears.push(examYear);
          }

          subjectExamMonthsBySemester.push(examMonths);
          subjectExamYearsBySemester.push(examYears);
        }

        const month = subjectExamMonthsBySemester[7][0];
        const year = subjectExamYearsBySemester[7][0];
        const monthAndYearOfPassing = `${month}, ${year}`;

        let sum = 0;
        cgpaEachSem.forEach((cgpa) => {
          sum = sum + cgpa;
        });
        let cgpa = sum / 8;
        cgpa = parseFloat(cgpa.toFixed(2));

        const response = {
          registration_no,
          institution,
          year_of_adm,
          student_name,
          cgpa,
          subjectCreditsBySemester,
          subjectExamMonthsBySemester,
          subjectExamYearsBySemester,
          subjectNamesBySemester,
          subjectGradesBySemester,
          monthAndYearOfPassing,
        };

        return response;
      })
    );

    //console.log(responses);
    res.status(200).json(responses);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getEligibleStudents,
  getCertificateDetails,
};
