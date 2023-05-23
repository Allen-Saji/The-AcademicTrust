const express = require("express");
const router = express.Router();
const { addProgram } = require("../controllers/programController");

router.post("/", addProgram);

module.exports = router;
