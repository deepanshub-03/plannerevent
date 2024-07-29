const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  // other fields
});

module.exports = mongoose.model('Event', EventSchema);