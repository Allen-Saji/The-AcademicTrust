const asyncHandler = require("express-async-handler");
const Enrollment = require("../models/enrollmentModel");
const Result = require("../models/resultModel");
const Student = require("../models/studentModel");

const getEligibleStudents = asyncHandler(async (req, res) => {
  try {
    const { year_of_adm } = req.body;
    // Fetch all students with the same year_of_adm value
    const students = await Student.find({ year_of_adm });

    // Filter the eligible students
    const eligibleStudents = [];

    for (const student of students) {
      const { _id: student_id } = student;

      // Get enrollments for the student
      const enrollments = await Enrollment.find({ student_id });

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

    res.status(200).json(eligibleStudents);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = {
  getEligibleStudents,
};
