const express = require("express");
const router = express.Router();
const Chit = require("../models/Chit");
const ChitScheme = require("../models/ChitScheme");

// Get all users
router.get("/:userId/allchits", async (req, res) => {
  try {
    const filter = { userId: req.params.userId };
    const sort = {
      amount: 1,
    };
    const Chits = await Chit.find(filter).sort(sort);

    if (!Chits || Chits.length === 0) {
      console.log("No Chits found");
      return res.status(404).json({ error: "No chits found" });
    }
    const chitsWithChitScheme = await Promise.all(
      Chits.map(async (chit) => {
        const chitScheme = await ChitScheme.findById(chit.chitSchemeId);
        return {
          ...chit._doc,
          chitScheme: chitScheme._doc,
        };
      })
    );

    res.json(chitsWithChitScheme);
  } catch (error) {
    console.error("Error fetching chits:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/:chitId", async (req, res) => {
  try {
    const Chits = await Chit.findById(req.params.chitId);

    if (!Chits || Chits.length === 0) {
      console.log("No Chits found");
      return res.status(404).json({ error: "No chits found" });
    }
    const chitsWithChitScheme = await Promise.all(
      Chits.map(async (chit) => {
        const chitScheme = await ChitScheme.findById(chit.chitSchemeId);
        return {
          ...chit._doc,
          chitScheme: chitScheme._doc,
        };
      })
    );

    res.json(chitsWithChitScheme);
  } catch (error) {
    console.error("Error fetching chits:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.post("/addchit", async (req, res) => {
  try {
    const newChit = new Chit(req.body);
    const savedChit = await newChit.save();
    res.json(savedChit);
  } catch (error) {
    console.error("Error inserting chits:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

module.exports = router;
