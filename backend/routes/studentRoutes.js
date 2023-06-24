const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  loginUser,
  registerUser,
  getStudent,
  getGradeAndMarks,
  changePassword,
} = require("../controllers/studentController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/homepage", protect, getStudent);
router.post("/result", protect, getGradeAndMarks);
router.post("/changePassword", changePassword);
module.exports = router;
