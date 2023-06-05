const express = require("express");
const router = express.Router();
const {
  addOrganization,
  editOrganization,
  deleteOrganization,
  login,
} = require("../controllers/organizationController");

router.post("/", addOrganization);
router.put("/", editOrganization);
router.delete("/", deleteOrganization);
router.post("/login", login);

module.exports = router;
