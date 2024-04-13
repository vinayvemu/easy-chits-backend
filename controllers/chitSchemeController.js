const express = require("express");
const router = express.Router();
const ChitScheme = require("../models/ChitScheme");

router.get("/:orgId/allchitschemes", async (req, res) => {
  try {
    const filter = { orgId: req.params.orgId };
    const sort = {
      amount: 1,
    };
    const Chits = await ChitScheme.find(filter).sort(sort);

    if (!Chits || Chits.length === 0) {
      console.log("No chitSchemes found");
      return res.status(404).json({ error: "No chitScheme found" });
    }
    res.json(Chits);
  } catch (error) {
    console.error("Error fetching chitScheme:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:chitschemeId", async (req, res) => {
  try {
    const Chits = await ChitScheme.findById(req.params.chitschemeId);

    if (!Chits || Chits.length === 0) {
      console.log("No chitScheme found");
      return res.status(404).json({ error: "No chitScheme found" });
    }
    res.json(Chits);
  } catch (error) {
    console.error("Error fetching chitScheme:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.post("/addchitscheme", async (req, res) => {
  try {
    const newChitScheme = new ChitScheme(req.body);
    const newDate = new Date();

    newChitScheme.set("createdAt", newDate);
    const savedChitScheme = await newChitScheme.save();
    res.json(savedChitScheme);
  } catch (error) {
    console.error("Error inserting chitscheme:", error);
    res.status(500).json({ error: error.message || "internal server error" });
  }
});

module.exports = router;
