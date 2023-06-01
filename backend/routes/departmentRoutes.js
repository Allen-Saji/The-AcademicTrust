const express = require("express");
const router = express.Router();
const { addDepartment } = require("../controllers/departmentController");

router.post("/", addDepartment);

module.exports = router;
