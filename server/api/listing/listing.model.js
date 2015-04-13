'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ListingSchema = new Schema({
  title: {"type":String,"required":true},
  subtitle: String,
  description: {"type":String,"required":true},
  location: {"type":String,"required":true},
  lat: {"type":String,"required":true},
  lng: {"type":String,"required":true},
  city_id: String,
  city: {"type":String,"required":true},
  country: {"type":String,"required":true},
  clicks: {"type":Number,"default":0},
  approved: {"type":Number,"default":0},
  classes:[{
    day:{"type":String,"required":true},
    start_time:{"type":Date,"required":true},
    start_time_str:{"type":String,"required":true},
    end_time:{"type":Date,"required":true},
    end_time_str:{"type":String,"required":true},
    curriculum:{"type":String,"required":true},
  }],
  update_to: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  deleted_at: { type: Date }
});

module.exports = mongoose.model('Listing', ListingSchema);