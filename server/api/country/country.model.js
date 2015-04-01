'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CountrySchema = new Schema({
  name: String,
  url: String,
  created_at: String,
  updated_at: String,
  deleted_at: String
});

module.exports = mongoose.model('Country', CountrySchema);