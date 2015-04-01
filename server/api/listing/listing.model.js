'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ListingSchema = new Schema({
  title: String,
  subtitle: String,
  listing_summary: String,
  location: String,
  latitude: String,
  longitude: String,
  city_id: String,
  views: String,
  update_to: String,
  created_at: String,
  updated_at: String,
  deleted_at: String
});

module.exports = mongoose.model('Listing', ListingSchema);