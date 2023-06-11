const express = require("express");
const router = express.Router();
const { getEligibleStudents } = require("../controllers/certificateController");

router.post("/", getEligibleStudents);

module.exports = router;
