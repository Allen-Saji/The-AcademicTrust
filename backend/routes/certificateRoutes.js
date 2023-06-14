const express = require("express");
const router = express.Router();
const {
  getEligibleStudents,
  getCertificateDetails,
} = require("../controllers/certificateController");

router.post("/", getEligibleStudents);
router.post("/getCertificateDetails", getCertificateDetails);

module.exports = router;
