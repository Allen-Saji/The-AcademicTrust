const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  getStudent,
} = require("../controllers/studentController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/homepage", getStudent);
router.get("/result", getStudent);
module.exports = router;
