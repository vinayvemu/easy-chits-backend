const express = require("express");
const router = express.Router();
const Payment = require("../models/Payment");

// Get all users
router.get("/:chitId", async (req, res) => {
  try {
    const filter = { chitId: req.params.chitId };
    const sort = {
      createdAt: 1,
    };

    const Payments = await Payment.find(filter).sort(sort);

    if (!Payments || Payments.length === 0) {
      console.log("No payments found");
      return res.status(404).json({ error: "No payments found" });
    }
    res.json(Payments);
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/addpayment", async (req, res) => {
  try {
    const newPayment = new Payment(req.body);
    const savedPayment = await newPayment.save();
    res.json(savedPayment);
  } catch (error) {
    console.error("Error inserting payments:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

module.exports = router;
