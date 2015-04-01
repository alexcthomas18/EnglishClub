'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CitySchema = new Schema({
  name: String,
  url: String,
  country_id: String,
  created_at: String,
  updated_at: String,
  deleted_at: String
});

module.exports = mongoose.model('City', CitySchema);