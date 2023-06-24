const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/studentModel");
const Enrollment = require("../models/enrollmentModel");
const Course = require("../models/courseModel");
const Result = require("../models/resultModel");

//@desc register a new user
//@route /api/student
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    phn_no,
    address,
    registration_no,
    program,
    institution,
    year_of_adm,
    branch,
  } = req.body;

  if (!name) {
    res.status(400);
    throw new Error("Please include name!");
  } else if (!email) {
    res.status(400);
    throw new Error("Please include email");
  } else if (!address) {
    res.status(400);
    throw new Error("Please include address");
  } else if (!phn_no) {
    res.status(400);
    throw new Error("Please include phone number");
  } else if (!password) {
    res.status(400);
    throw new Error("Please include password");
  } else if (!registration_no) {
    res.status(400);
    throw new Error("Please include registration number");
  } else if (!program) {
    res.status(400);
    throw new Error("Please include program");
  }

  //find if user exists
  const userExists = await User.findOne({ registration_no });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    name,
    email,
    registration_no,
    address,
    password: hashedPassword,
    phn_no,
    program,
    branch,
    year_of_adm,
    institution,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phn_no: user.phn_no,
      address: user.address,
      program: user.program,
      registration_no: user.registration_no,
      branch: user.branch,
      institution: user.institution,
      year_of_adm: user.year_of_adm,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Data!");
  }

  res.send("Register Route");
});

// Controller function to change student password
const changePassword = asyncHandler(async (req, res) => {
  const { registration_no, currentPassword, newPassword } = req.body;

  // Find the student by registration number
  const student = await Student.findOne({ registration_no });

  // Check if the student exists
  if (!student) {
    res.status(404);
    throw new Error("Student not found");
  }

  // Check if the current password matches
  const isMatch = await bcrypt.compare(currentPassword, student.password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Incorrect current password");
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update the password
  student.password = hashedPassword;
  await student.save();

  res.status(200).json({ message: "Password changed successfully" });
});

//@desc user login
//@route /api/student/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { registration_no, password } = req.body;

  const user = await User.findOne({ registration_no });

  //check if user and password match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      registration_no: user.registration_no,
      email: user.email,
      phn_no: user.phn_no,
      address: user.address,
      program: user.program,
      branch: user.branch,
      institution: user.institution,
      branch: user.branch,
      institution: user.institution,
      year_of_adm: user.year_of_adm,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials!");
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//@desc get student info
//@route /api/student/homepage
//@access private
const getStudent = asyncHandler(async (req, res) => {
  const student = await User.findOne({ _id: req.user._id }).select("-password");

  if (!student) {
    res.status(404).json({
      message: "Student not found!",
    });
    return;
  }

  res.status(200).json(student);
});

//@desc get student marks
//@route /api/student/result
//@access private
const getGradeAndMarks = asyncHandler(async (req, res) => {
  const { student_id, semester } = req.body;

  // Retrieve enrollments for the student and semester
  const enrollments = await Enrollment.find({
    student_id,
    semester,
  });

  const courseIds = [];
  enrollments.forEach((enrollment) => {
    courseIds.push(enrollment.course_id);
  });

  const courses = await Course.find({
    courseCode: { $in: courseIds },
  });

  //console.log(courseNames);
  //console.log(courseCredits);

  if (enrollments.length === 0) {
    res.status(404).json({
      message:
        "No enrollments found for the student in the specified semester!",
    });
    return;
  }

  let gradeAndMarks;

  const courseNames = courses.map((course) => course.name);
  const courseCredits = courses.map((course) => course.credits);

  gradeAndMarks = courseNames.map((course, index) => ({
    course_name: course,
    grade: null,
    credits: courseCredits[index],
  }));

  //console.log(gradeAndMarks);

  // Retrieve results for the enrollments
  const results = await Result.find({
    enrollment_id: {
      $in: enrollments.map((enrollment) => enrollment._id),
    },
  });

  if (results.length === 0) {
    res.status(404).json({
      message: "No results found for the student's enrollments!",
    });
    return;
  }

  gradeAndMarks = results.map((result, index) => ({
    course_name: gradeAndMarks[index].course_name,
    grade: result.grade,
    credits: gradeAndMarks[index].credits,
  }));

  if (results[0].isPublished) {
    res.status(200).json({
      gradeAndMarks,
    });
  } else {
    res.status(200).json({
      message: "Result has not been published yet!",
    });
  }
});

module.exports = {
  loginUser,
  registerUser,
  getStudent,
  getGradeAndMarks,
  changePassword,
};
