const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/studentModel");

//@desc register a new user
//@route /api/student
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phn_no, address, registration_no, program } =
    req.body;

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
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Data!");
  }

  res.send("Register Route");
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
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials!");
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  loginUser,
  registerUser,
};
