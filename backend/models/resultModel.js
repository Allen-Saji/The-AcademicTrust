const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  exam_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Exam",
  },
  enrollment_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Enrollment",
  },
  marks: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
