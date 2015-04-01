'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ListingSchema = new Schema({
  title: String,
  subtitle: String,
  listing_summary: String,
  location: String,
  latitude: Double,
  longitude: Double,
  city_id: ObjectId,
  views: String,
  update_to: String,
  created_at: Timestamp,
  updated_at: Timestamp,
  deleted_at: Timestamp
});

module.exports = mongoose.model('Listing', ListingSchema);