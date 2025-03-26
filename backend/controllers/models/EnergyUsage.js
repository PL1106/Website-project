const mongoose = require('mongoose');

const energyUsageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  consumption: { type: Number, required: true },  // e.g. kWh
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('EnergyUsage', energyUsageSchema);
