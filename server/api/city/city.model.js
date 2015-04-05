'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CitySchema = new Schema({
  name: String,
  url: String,
  country_id: String,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date
});

module.exports = mongoose.model('City', CitySchema);