const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  course_id: {
    type: String,
    required: true,
    ref: "Course",
  },
  student_id: {
    type: String,
    required: true,
    ref: "Student",
  },
  semester: {
    type: Number,
    required: true,
  },
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

module.exports = Enrollment;
