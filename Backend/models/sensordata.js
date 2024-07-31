const mongoose = require('mongoose');

const SensorDataSchema = new mongoose.Schema({
  distance: Number,
  temperature: Number,
  humidity: Number,
  rainfall: Number,
  date: { type: String, required: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model('SensorData', SensorDataSchema);
