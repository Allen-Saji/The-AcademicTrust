const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  addInstitution,
  editInstitution,
  deleteInstitution,
  viewAllInstitutions,
} = require("../controllers/institutionController");

router.post("/", addInstitution);
router.put("/", editInstitution);
router.delete("/", deleteInstitution);
router.get("/", viewAllInstitutions);

module.exports = router;
