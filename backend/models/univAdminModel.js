const mongoose = require("mongoose");

const univAdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
  password: {
    type: String,
    required: true,
  },
});

const UnivAdmin = mongoose.model("UnivAdmin", univAdminSchema);

module.exports = UnivAdmin;
