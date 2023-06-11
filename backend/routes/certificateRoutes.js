const express = require("express");
const router = express.Router();
const { getEligibleStudents } = require("../controllers/certificateController");

router.get("/", getEligibleStudents);

module.exports = router;
