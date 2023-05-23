const express = require("express");
const router = express.Router();
const {
  isGraduationEligible,
} = require("../controllers/certificateController");

router.get("/", isGraduationEligible);

module.exports = router;
