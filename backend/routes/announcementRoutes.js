const express = require("express");
const router = express.Router();
const {
  addAnnouncement,
  getLatestAnnouncements,
} = require("../controllers/announcementController");

router.post("/", addAnnouncement);
router.get("/", getLatestAnnouncements);

module.exports = router;
