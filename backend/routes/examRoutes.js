const express = require("express");
const router = express.Router();
const { addExam } = require("../controllers/examController");

router.post("/", addExam);

module.exports = router;
