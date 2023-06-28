const express = require("express");
const router = express.Router();
const {
  getEligibleStudents,
  getCertificateDetails,
  getCgpaEachSem,
} = require("../controllers/certificateController");
const {
  issueCertificate,
  viewCertificate,
} = require("../controllers/web3Controller");

router.post("/", getEligibleStudents);
router.post("/getCertificateDetails", getCertificateDetails);
router.post("/issueCertificate", issueCertificate);
router.post("/viewCertificate", viewCertificate);
router.post("/getCgpa", getCgpaEachSem);

module.exports = router;
