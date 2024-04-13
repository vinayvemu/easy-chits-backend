const mongoose = require("mongoose");

const chitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  orgId: { type: mongoose.Schema.Types.ObjectId, required: true },
  chitSchemeId: { type: mongoose.Schema.Types.ObjectId, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  expectedChit: { type: Number, required: true },
  actualChitDelivered: { type: Number, required: false },
  chitDeliveredAmount: { type: Number, required: false },
});

module.exports = mongoose.model("Chit", chitSchema);
