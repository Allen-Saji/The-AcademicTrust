const asyncHandler = require("express-async-handler");
const Exam = require("../models/examModel");

const addExam = asyncHandler(async (req, res) => {
  const { name, date } = req.body;

  // Check if exam exists
  const examExists = await Exam.findOne({ name });
  if (examExists) {
    res.status(400);
    throw new Error("Exam already exists!");
  }

  // Create exam
  const exam = await Exam.create({
    name,
    date,
  });

  // Return response object
  res.status(201).json({
    name: exam.name,
    date: exam.date,
  });
});

module.exports = {
  addExam,
};
