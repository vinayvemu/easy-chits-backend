const mongoose = require("mongoose");

const chitSchemeSchema = new mongoose.Schema({
  orgId: { type: mongoose.Schema.Types.ObjectId, required: true },
  duration: { type: String, required: true },
  amount: { type: Number, required: true },
  name: { type: String, required: true },
  installment: { type: Number, required: true },
  duration: { type: Number, required: true },
  createdAt: { type: Date, required: true },
  deletedAt: { type: Date, required: false },
  createdBy: { type: mongoose.Schema.Types.ObjectId, required: true },
  deletedBy: { type: mongoose.Schema.Types.ObjectId, required: false },
  paymentStructure: {
    type: Map,
    of: Number,
    required: true,
  },
});

module.exports = mongoose.model("ChitScheme", chitSchemeSchema);
