const express = require("express");
const router = express.Router();
const Organization = require("../models/Organization");

router.post("/addorganization", async (req, res) => {
  try {
    const newOrganization = new Organization(req.body);
    const savedOrganization = await newOrganization.save();
    res.json(savedOrganization);
  } catch (error) {
    console.error("Error inserting organization:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
