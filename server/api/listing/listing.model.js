'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ListingSchema = new Schema({
  title: String,
  subtitle: String,
  listing_summary: String,
  location: String,
  latitude: Number,
  longitude: Number,
  city_id: String,
  views: String,
  update_to: String,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date
});

module.exports = mongoose.model('Listing', ListingSchema);