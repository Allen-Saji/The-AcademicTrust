const asyncHandler = require("express-async-handler");
const Result = require("../models/resultModel");
const Student = require("../models/studentModel");
const Enrollment = require("../models/enrollmentModel");

const addResult = asyncHandler(async (req, res) => {
  const { exam_id, enrollment_id, marks, grade, isPublished } = req.body;

  // Check if result exists
  const resultExists = await Result.findOne({
    exam_id,
    enrollment_id,
  });
  if (resultExists) {
    res.status(400);
    throw new Error("Result already exists!");
  }

  // Create result
  const result = await Result.create({
    exam_id,
    enrollment_id,
    marks,
    grade,
    isPublished,
  });

  // Return response object
  res.status(201).json({
    exam_id: result.exam_id,
    enrollment_id: result.enrollment_id,
    marks: result.marks,
    grade: result.grade,
    isPublished: result.isPublished,
  });
});

const updateResult = asyncHandler(async (req, res) => {
  const { exam_id, enrollment_id, marks, grade, isPublished } = req.body;

  // Check if result exists
  const resultExists = await Result.findOne({
    exam_id,
    enrollment_id,
  });
  if (!resultExists) {
    res.status(404);
    throw new Error("Result does not exist!");
  }

  // Update result
  await Result.updateOne(
    {
      exam_id,
      enrollment_id,
    },
    {
      $set: {
        marks,
        grade,
        isPublished,
      },
    }
  );
  // Return response object
  res.status(200).json({
    exam_id: resultExists.exam_id,
    enrollment_id: resultExists.enrollment_id,
    marks: resultExists.marks,
    grade: resultExists.grade,
    isPublished: resultExists.isPublished,
  });
});

const publishResult = asyncHandler(async (req, res) => {
  const { year_of_adm, semester } = req.body;

  // Find students with the specified year_of_adm
  const students = await Student.find({ year_of_adm });

  // Extract student IDs into an array
  const studentIds = students.map((student) => student.registration_no);

  // Find enrollments of the students in the specified semester
  const enrollments = await Enrollment.find({
    student_id: { $in: studentIds },
    semester,
  });

  // Extract enrollment IDs into an array
  const enrollmentIds = enrollments.map((enrollment) => enrollment._id);

  // Check if results are already published for the found enrollments
  const isAlreadyPublished = await Result.exists({
    enrollment_id: { $in: enrollmentIds },
    isPublished: true,
  });

  if (isAlreadyPublished) {
    res.status(400).json({ message: "Results are already published." });
  } else {
    // Update the isPublished field to true for the results of the found enrollments
    await Result.updateMany(
      { enrollment_id: { $in: enrollmentIds } },
      { $set: { isPublished: true } }
    );

    res.status(200).json({ message: "Results published successfully." });
  }
});

module.exports = {
  addResult,
  updateResult,
  publishResult,
};
