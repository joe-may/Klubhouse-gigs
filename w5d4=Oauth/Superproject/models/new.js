var mongoose = require('mongoose');


var ListingSchema = new mongoose.Schema({
  name: String,
  email: String,
  title: String,
  description: String,
  budget: String,
  date: String,
  googleId: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Listing', ListingSchema);