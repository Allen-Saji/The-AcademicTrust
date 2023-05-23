const asyncHandler = require("express-async-handler");
const Organization = require("../models/organizationModel");

const addOrganization = asyncHandler(async (req, res) => {
  const { name, headquarters, year_of_reg, password } = req.body;

  // Check if organization exists
  const organizationExists = await Organization.findOne({
    name,
  });
  if (organizationExists) {
    res.status(400);
    throw new Error("Organization already exists!");
  }

  // Create organization
  const organization = await Organization.create({
    name,
    headquarters,
    year_of_reg,
    password,
  });

  // Return response object
  res.status(201).json({
    name: organization.name,
    headquarters: organization.headquarters,
    year_of_reg: organization.year_of_reg,
    password: organization.password,
  });
});

const editOrganization = asyncHandler(async (req, res) => {
  const { id, name, headquarters, year_of_reg, password } = req.body;

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
};
