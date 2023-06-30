const express = require("express");
const router = express.Router();

const {
  addInstitution,
  editInstitution,
  deleteInstitution,
  viewAllInstitutions,
  getInstitution,
} = require("../controllers/institutionController");

router.post("/", addInstitution);
router.post("/getInstitution", getInstitution);
router.put("/", editInstitution);
router.delete("/", deleteInstitution);
router.get("/", viewAllInstitutions);

module.exports = router;
