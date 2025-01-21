const express = require("express");
const User = require('../models/User');
const router = express.Router();

// Sign Up
router.post("/api/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: "User  created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Sign In
router.post("/api/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    res.status(200).json({ message: "Sign in successful", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;