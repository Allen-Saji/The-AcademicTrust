const Announcement = require("../models/announcementModel");

// Controller function to add a new announcement
async function addAnnouncement(req, res) {
  const { title } = req.body;

  try {
    const newAnnouncement = new Announcement({
      title,
    });

    const savedAnnouncement = await newAnnouncement.save();
    res.status(201).json(savedAnnouncement);
  } catch (error) {
    res.status(500).json({ error: "Failed to add announcement" });
  }
}

// Controller function to delete an announcement
async function deleteAnnouncement(req, res) {
  const { id } = req.params;

  try {
    const deletedAnnouncement = await Announcement.findByIdAndDelete(id);

    if (!deletedAnnouncement) {
      return res.status(404).json({ error: "Announcement not found" });
    }

    res.status(200).json({ message: "Announcement deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete announcement" });
  }
}

// Controller function to get the latest three announcements
async function getLatestAnnouncements(req, res) {
  try {
    const announcements = await Announcement.find().sort({ date: -1 }).limit(3);

    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve announcements" });
  }
}

module.exports = {
  addAnnouncement,
  deleteAnnouncement,
  getLatestAnnouncements,
};
