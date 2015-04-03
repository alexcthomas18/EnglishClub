'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ListingSessionSchema = new Schema({
  start_time: Timestamp,
  end_time: Timestamp,
  curriculum: String,
  listing_id: ObjectId,
  created_at: Timestamp,
  updated_at: Timestamp,
  deleted_at: Timestamp
});

module.exports = mongoose.model('ListingSession', ListingSessionSchema);