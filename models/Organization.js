const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gstNumber: { type: String, required: true },
  establishedOn: { type: Date, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("Organizations", organizationSchema);
