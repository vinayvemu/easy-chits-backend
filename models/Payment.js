const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  chitId: { type: mongoose.Schema.Types.ObjectId, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  orgId: { type: mongoose.Schema.Types.ObjectId, required: true },
  paidForTheMonth: { type: Date, required: true },
  receivedDate: { type: Date, required: true },
  amountReceived: { type: Number, required: true },
  balance: { type: Number, required: false },
  mode: { type: String, required: true },
  onlineRefNumber: { type: String, required: false },
  transferredAmount: { type: Number, required: false },
});

module.exports = mongoose.model("Payment", paymentSchema);
