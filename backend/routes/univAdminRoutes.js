const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controllers/univController");

router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;
