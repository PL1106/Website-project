const express = require('express');
const router = express.Router();
const EnergyUsage = require('../models/EnergyUsage');
const verifyToken = require('../middleware/authMiddleware');

// Add energy usage record
router.post('/', verifyToken, async (req, res) => {
  try {
    const { consumption } = req.body;
    const newUsage = new EnergyUsage({ user: req.userId, consumption });
    await newUsage.save();
    res.status(201).json({ msg: 'Energy usage recorded', data: newUsage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get all usage records for logged-in user
router.get('/', verifyToken, async (req, res) => {
  try {
    const records = await EnergyUsage.find({ user: req.userId });
    res.json(records);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
