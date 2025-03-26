const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  item: { type: String, required: true },     // e.g. "Solar Panel", "Wind Turbine"
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Purchase', purchaseSchema);
