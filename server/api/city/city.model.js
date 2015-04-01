'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CitySchema = new Schema({
  name: String,
  url: String,
  country_id: ObjectId,
  created_at: Timestamp,
  updated_at: Timestamp,
  deleted_at: Timestamp
});

module.exports = mongoose.model('City', CitySchema);