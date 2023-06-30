const asyncHandler = require("express-async-handler");
const Institution = require("../models/institutionModel");

const addInstitution = asyncHandler(async (req, res) => {
  const { name, year_of_reg, address, phn_no, email, institution_code } =
    req.body;

  // Check if institution exists
  const institutionExists = await Institution.findOne({
    name,
  });
  if (institutionExists) {
    res.status(400);
    throw new Error("Institution already exists!");
  }

  // Create institution
  const institution = await Institution.create({
    name,
    year_of_reg,
    address,
    phn_no,
    email,
    institution_code,
  });

  // Return response object
  res.status(201).json({
    name: institution.name,
    year_of_reg: institution.year_of_reg,
    address: institution.address,
    phn_no: institution.phn_no,
    email: institution.email,
    institution_code: institution.institution_code,
  });
});

const getInstitution = asyncHandler(async (req, res) => {
  const { institution_code } = req.body;

  // Find institution by institutionCode
  const institution = await Institution.findOne({ institution_code });

  // Check if institution exists
  if (!institution) {
    res.status(404);
    throw new Error("Institution not found!");
  }

  // Return response object
  res.json({
    name: institution.name,
    year_of_reg: institution.year_of_reg,
    address: institution.address,
    phn_no: institution.phn_no,
    email: institution.email,
    institution_code: institution.institution_code,
  });
});

const editInstitution = asyncHandler(async (req, res) => {
  const { name, year_of_reg, address, phn_no, email, institution_code } =
    req.body;

  // Check if institution exists
  const institution = await Institution.findById(id);
  if (!institution) {
    res.status(404);
    throw new Error("Institution not found!");
  }

  // Update institution
  institution.name = name;
  institution.year_of_reg = year_of_reg;
  institution.address = address;
  institution.phn_no = phn_no;
  institution.email = email;
  institution.institution_code = institution_code;
  await institution.save();

  // Return response object
  res.status(200).json({
    name: institution.name,
    year_of_reg: institution.year_of_reg,
    address: institution.address,
    phn_no: institution.phn_no,
    email: institution.email,
    institution_code: institution.institution_code,
  });
});

const deleteInstitution = asyncHandler(async (req, res) => {
  const { id } = req.body;

  // Check if institution exists
  const institution = await Institution.findById(id);
  if (!institution) {
    res.status(404);
    throw new Error("Institution not found!");
  }

  // Delete institution
  await institution.remove();

  // Return response object
  res.status(200).json({
    message: "Institution deleted successfully!",
  });
});

const viewAllInstitutions = asyncHandler(async (req, res) => {
  // Fetch all institutions from the database
  const institutions = await Institution.find();

  // Return response object with the list of institutions
  res.status(200).json(institutions);
});

module.exports = {
  addInstitution,
  editInstitution,
  deleteInstitution,
  viewAllInstitutions,
  getInstitution,
};
