'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ListingSessionSchema = new Schema({
  start_time: Date,
  end_time: Date,
  curriculum: String,
  listing_id: String,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date
});

module.exports = mongoose.model('ListingSession', ListingSessionSchema);