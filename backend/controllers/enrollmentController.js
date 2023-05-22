const asyncHandler = require("express-async-handler");
const Enrollment = require("../models/enrollmentModel");

const addEnrollment = asyncHandler(async (req, res) => {
  const { course_id, student_id, semester } = req.body;

  // Check if enrollment exists
  const enrollmentExists = await Enrollment.findOne({
    course_id,
    student_id,
    semester,
  });
  if (enrollmentExists) {
    res.status(400);
    throw new Error("Enrollment already exists!");
  }

  // Create enrollment
  const enrollment = await Enrollment.create({
    course_id,
    student_id,
    semester,
  });

  // Return response object
  res.status(201).json({
    course_id: enrollment.course_id,
    student_id: enrollment.student_id,
    semester: enrollment.semester,
  });
});

module.exports = {
  addEnrollment,
};
