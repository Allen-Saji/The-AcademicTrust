const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
});

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;
