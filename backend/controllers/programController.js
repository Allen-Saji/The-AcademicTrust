const asyncHandler = require("express-async-handler");
const Program = require("../models/programModel");

const addProgram = asyncHandler(async (req, res) => {
  const { name, duration } = req.body;

  // Check if program exists
  const programExists = await Program.findOne({
    name,
  });
  if (programExists) {
    res.status(400);
    throw new Error("Program already exists!");
  }

  // Create program
  const program = await Program.create({
    name,
    duration,
  });

  // Return response object
  res.status(201).json({
    name: program.name,
    duration: program.duration,
  });
});

module.exports = {
  addProgram,
};
