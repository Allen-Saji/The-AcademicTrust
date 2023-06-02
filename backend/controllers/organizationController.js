const asyncHandler = require("express-async-handler");
const Organization = require("../models/organizationModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const addOrganization = asyncHandler(async (req, res) => {
  const { name, headquarters, year_of_reg, password, email } = req.body;

  // Check if organization exists
  const organizationExists = await Organization.findOne({
    email,
  });
  if (organizationExists) {
    res.status(400);
    throw new Error("Organization already exists!");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create organization
  const organization = await Organization.create({
    name,
    email,
    headquarters,
    year_of_reg,
    password: hashedPassword,
  });

  // Return response object
  res.status(201).json({
    name: organization.name,
    headquarters: organization.headquarters,
    year_of_reg: organization.year_of_reg,
    email,
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const organization = await Organization.findOne({ email });

  //check if user and password match
  if (organization && (await bcrypt.compare(password, organization.password))) {
    res.status(200).json({
      _id: organization._id,
      name: organization.name,
      headquarters: organization.headquarters,
      year_of_reg: organization.year_of_reg,
      email: organization.email,
      token: generateToken(organization._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials!");
  }
});

const editOrganization = asyncHandler(async (req, res) => {
  const { id, name, headquarters, year_of_reg, password, email } = req.body;

  // Check if organization exists
  const organization = await Organization.findById(id);
  if (!organization) {
    res.status(404);
    throw new Error("Organization not found!");
  }

  // Update organization
  organization.name = name;
  organization.headquarters = headquarters;
  organization.year_of_reg = year_of_reg;
  organization.password = password;
  organization.email = email;
  await organization.save();

  // Return response object
  res.status(200).json({
    name: organization.name,
    headquarters: organization.headquarters,
    year_of_reg: organization.year_of_reg,
    password: organization.password,
  });
});

const deleteOrganization = asyncHandler(async (req, res) => {
  const { id } = req.body;

  // Check if organization exists
  const organization = await Organization.findById(id);
  if (!organization) {
    res.status(404);
    throw new Error("Organization not found!");
  }

  // Delete organization
  await organization.remove();

  // Return response object
  res.status(200).json({
    message: "Organization deleted successfully!",
  });
});

module.exports = {
  addOrganization,
  editOrganization,
  deleteOrganization,
  login,
};
