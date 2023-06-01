const mongoose = require("mongoose");

const institutionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  year_of_reg: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phn_no: {
    type: [Number],
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  institution_code: {
    type: String,
    required: true,
    unique: true,
  },
});

const Institution = mongoose.model("Institution", institutionSchema);

module.exports = Institution;
