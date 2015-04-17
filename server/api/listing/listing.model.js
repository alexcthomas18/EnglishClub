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
  cityId: String,
  city: {"type":String,"required":true},
  country: {"type":String,"required":true},
  clicks: {"type":Number,"default":0},
  approved: {"type":Number,"default":0},
  classes:[{
    day:{"type":String,"required":true},
    startTime:{"type":Date,"required":true},
    startTimeStr:{"type":String,"required":true},
    endTime:{"type":Date,"required":true},
    endTimeStr:{"type":String,"required":true},
    curriculum:{"type":String,"required":true},
  }],
  updateTo: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date }
});

module.exports = mongoose.model('Listing', ListingSchema);