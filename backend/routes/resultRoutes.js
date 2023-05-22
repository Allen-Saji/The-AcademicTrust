const express = require("express");
const router = express.Router();
const { addResult, updateResult } = require("../controllers/resultController");

router.post("/", addResult);
router.put("/", updateResult);

module.exports = router;
