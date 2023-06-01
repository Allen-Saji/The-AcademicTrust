const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  loginUser,
  registerUser,
  getStudent,
  getGradeAndMarks,
} = require("../controllers/studentController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/homepage", protect, getStudent);
router.get("/result", protect, getGradeAndMarks);
module.exports = router;
