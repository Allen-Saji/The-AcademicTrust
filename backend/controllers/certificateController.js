const asyncHandler = require("express-async-handler");
const Enrollment = require("../models/enrollmentModel");
const Result = require("../models/resultModel");

const isGraduationEligible = asyncHandler(async (req, res) => {
  const { student_id } = req.body;

  // Get enrollments for student
  const enrollments = await Enrollment.find({
    student_id,
  });

  // Check if enrollments exist
  if (!enrollments.length) {
    res.status(404).json({
      message: "No enrollments found for student!",
    });
    return;
  }

  // Get results for enrollments
  const results = await Result.find({
    enrollment_id: enrollments.map((enrollment) => enrollment.id),
  });

  // Check if results exist
  if (!results.length) {
    res.status(404).json({
      message: "No results found for student!",
    });
    return;
  }

  // Check if any results have grade F
  const hasFGrade = results.some((result) => result.grade === "F");

  // Return eligibility status
  res.status(200).json({
    eligible: !hasFGrade,
  });
});

module.exports = {
  isGraduationEligible,
};
