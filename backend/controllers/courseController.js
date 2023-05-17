const asyncHandler = require("express-async-handler");
const Course = require("../models/courseModel");

const addCourse = asyncHandler(async (req, res) => {
  const { name, courseCode, credits } = req.body;

  // Check if course exists
  const courseExists = await Course.findOne({ courseCode });
  if (courseExists) {
    res.status(400);
    throw new Error("Course already exists!");
  }

  // Create course
  const course = await Course.create({
    name,
    courseCode,
    credits,
  });

  // Return response object
  res.status(201).json({
    name: course.name,
    courseCode: course.courseCode,
    credits: course.credits,
  });
});

module.exports = {
  addCourse,
};
