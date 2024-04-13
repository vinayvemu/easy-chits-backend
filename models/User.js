const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: Number, required: true },
  aadharNumber: { type: Number, required: false },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String, required: true },
  createdAt: { type: Date, required: true },
  orgId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model("User", userSchema);
