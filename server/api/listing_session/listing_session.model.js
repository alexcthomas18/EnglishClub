'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ListingSessionSchema = new Schema({
  start_time: String,
  end_time: String,
  curriculum: String,
  listing_id: String,
  created_at: String,
  updated_at: String,
  deleted_at: String
});

module.exports = mongoose.model('Listing_Session', ListingSessionSchema);