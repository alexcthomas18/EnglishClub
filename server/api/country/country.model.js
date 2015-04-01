'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CountrySchema = new Schema({
  name: String,
  url: String,
  created_at: Timestamp,
  updated_at: Timestamp,
  deleted_at: Timestamp
});

module.exports = mongoose.model('Country', CountrySchema);