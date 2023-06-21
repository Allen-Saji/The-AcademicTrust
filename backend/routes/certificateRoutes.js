const express = require("express");
const router = express.Router();
const {
  getEligibleStudents,
  getCertificateDetails,
} = require("../controllers/certificateController");
const {
  issueCertificate,
  viewCertificate,
} = require("../controllers/web3Controller");

router.post("/", getEligibleStudents);
router.post("/getCertificateDetails", getCertificateDetails);
router.post("/issueCertificate", issueCertificate);
router.post("/viewCertificate", viewCertificate);

module.exports = router;
