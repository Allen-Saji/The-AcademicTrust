const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  address: {
    type: String,
    required: true,
  },
  program_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
  },
  phn_no: {
    type: [Number],
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  registration_no: {
    type: String,
    required: true,
    unique: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
