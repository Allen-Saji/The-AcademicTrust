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

const getCourse = asyncHandler(async (req, res) => {
  const { courseCode } = req.body;

  // Find course by courseCode
  const course = await Course.findOne({ courseCode });

  // Check if course exists
  if (!course) {
    res.status(404);
    throw new Error("Course not found!");
  }

  // Return response object
  res.json({
    name: course.name,
    courseCode: course.courseCode,
    credits: course.credits,
  });
});

const editCourse = asyncHandler(async (req, res) => {
  const { courseCode, name, credits } = req.body;

  // Find course by courseCode
  const course = await Course.findOne({ courseCode });

  // Check if course exists
  if (!course) {
    res.status(404);
    throw new Error("Course not found!");
  }

  // Update course details
  course.name = name;
  course.credits = credits;
  await course.save();

  // Return response object
  res.json({
    name: course.name,
    courseCode: course.courseCode,
    credits: course.credits,
  });
});

module.exports = {
  addCourse,
  getCourse,
  editCourse,
};
