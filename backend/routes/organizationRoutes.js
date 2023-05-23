const express = require("express");
const router = express.Router();
const {
  addOrganization,
  editOrganization,
  deleteOrganization,
} = require("../controllers/organizationController");

router.post("/", addOrganization);
router.put("/", editOrganization);
router.delete("/", deleteOrganization);

module.exports = router;
