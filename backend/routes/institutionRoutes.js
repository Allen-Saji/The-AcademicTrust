const express = require("express");
const router = express.Router();
const {
  addInstitution,
  editInstitution,
  deleteInstitution,
} = require("../controllers/institutionController");

router.post("/", addInstitution);
router.put("/", editInstitution);
router.delete("/", deleteInstitution);

module.exports = router;
