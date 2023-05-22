const asyncHandler = require("express-async-handler");
const Result = require("../models/resultModel");

const addResult = asyncHandler(async (req, res) => {
  const { exam_id, enrollment_id, marks, grade } = req.body;

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
  });

  // Return response object
  res.status(201).json({
    exam_id: result.exam_id,
    enrollment_id: result.enrollment_id,
    marks: result.marks,
    grade: result.grade,
  });
});

const updateResult = asyncHandler(async (req, res) => {
  const { exam_id, enrollment_id, marks, grade } = req.body;

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
      },
    }
  );

  // Return response object
  res.status(200).json({
    exam_id: result.exam_id,
    enrollment_id: result.enrollment_id,
    marks: result.marks,
    grade: result.grade,
  });
});

module.exports = {
  addResult,
  updateResult,
};
