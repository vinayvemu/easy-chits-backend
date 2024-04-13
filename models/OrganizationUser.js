const mongoose = require("mongoose");

const organizationUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  createdOn: { type: Date, required: true },
  isActive: { type: Boolean, required: true },
  orgId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model("OrganizationUser", organizationUserSchema);
