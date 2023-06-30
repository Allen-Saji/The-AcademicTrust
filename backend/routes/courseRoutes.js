const express = require("express");
const router = express.Router();
const {
  addCourse,
  getCourse,
  editCourse,
} = require("../controllers/courseController");

router.post("/", addCourse);
router.post("/getCourse", getCourse);
router.put("/editCourse", editCourse);

module.exports = router;
