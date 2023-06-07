const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  addInstitution,
  editInstitution,
  deleteInstitution,
  viewAllInstitutions,
} = require("../controllers/institutionController");

router.post("/", protect, addInstitution);
router.put("/", protect, editInstitution);
router.delete("/", protect, deleteInstitution);
router.get("/", viewAllInstitutions);

module.exports = router;
