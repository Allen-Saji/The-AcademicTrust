const express = require("express");
const router = express.Router();
const {
  addAnnouncement,
  getLatestAnnouncements,
} = require("../controllers/announcementController");

router.post("/add", addAnnouncement);
router.post("/", getLatestAnnouncements);

module.exports = router;
