const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/univAdminModel");

//@desc user login
//@route /api/admin/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  //check if user and password match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials!");
  }
});

//@desc register a new user
//@route /api/admin
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phn_no, role } = req.body;
  console.log(req.body);

  if (!name) {
    res.status(400);
    throw new Error("Please include name!");
  } else if (!email) {
    res.status(400);
    throw new Error("Please include email");
  } else if (!role) {
    res.status(400);
    throw new Error("Please include role");
  } else if (!phn_no) {
    res.status(400);
    throw new Error("Please include phone number");
  } else if (!password) {
    res.status(400);
    throw new Error("Please include password");
  }

  //find if user exists
  const userExists = await User.findOne({ email });

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
    password: hashedPassword,
    phn_no,
    role,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phn_no: user.phn_no,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Data!");
  }

  res.send("Register Route");
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  loginUser,
  registerUser,
};
