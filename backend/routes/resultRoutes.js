const express = require("express");
const router = express.Router();
const {
  addResult,
  updateResult,
  publishResult,
} = require("../controllers/resultController");

router.post("/", addResult);
router.post("/publish", publishResult);
router.put("/", updateResult);

module.exports = router;
