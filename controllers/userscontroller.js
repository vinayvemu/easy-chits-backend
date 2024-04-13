const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get all users
router.get("/:orgId/allusers", async (req, res) => {
  try {
    console.log("Fetching all users...");

    const filter = { orgId: req.params.orgId };
    const sort = {
      firstName: 1,
    };
    const users = await User.find(filter).sort(sort);

    console.log("Fetched users:", users);

    if (!users || users.length === 0) {
      console.log("No users found");
      return res.status(404).json({ error: "No users found" });
    }
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a single user by ID
router.get("/:id", async (req, res) => {
  try {
    console.log(`Fetching user by ID: ${req.params.id}`);
    const user = await User.findById(req.params.id);

    console.log("Fetched user:", user);

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.post("/adduser", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const newDate = new Date();
    newUser.set("createdAt", newDate);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    console.error("Error inserting test users:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

module.exports = router;
