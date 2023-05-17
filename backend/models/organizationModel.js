const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  headquarters: {
    type: String,
    required: true,
  },
  year_of_reg: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
