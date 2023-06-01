const asyncHandler = require("express-async-handler");
const Department = require("../models/departmentModel");

const addDepartment = asyncHandler(async (req, res) => {
  const { name, departmentCode } = req.body;

  // Check if department exists
  const departmentExists = await Department.findOne({
    name,
  });
  if (departmentExists) {
    res.status(400);
    throw new Error("Department already exists!");
  }

  // Create department
  const department = await Department.create({
    name,
    departmentCode,
  });

  // Return response object
  res.status(201).json({
    name: department.name,
    departmentCode: department.departmentCode,
  });
});

const editDepartment = asyncHandler(async (req, res) => {
  const { id, name, departmentCode } = req.body;

  // Check if department exists
  const department = await Department.findById(id);
  if (!department) {
    res.status(404);
    throw new Error("Department not found!");
  }

  // Update department
  department.name = name;
  department.departmentCode = departmentCode;
  await department.save();

  // Return response object
  res.status(200).json({
    name: department.name,
    departmentCode: department.departmentCode,
  });
});

const deleteDepartment = asyncHandler(async (req, res) => {
  const { id } = req.body;

  // Check if department exists
  const department = await Department.findById(id);
  if (!department) {
    res.status(404);
    throw new Error("Department not found!");
  }

  // Delete department
  await department.remove();

  // Return response object
  res.status(200).json({
    message: "Department deleted successfully!",
  });
});

module.exports = {
  addDepartment,
  editDepartment,
  deleteDepartment,
};
