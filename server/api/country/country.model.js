'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CountrySchema = new Schema({
  name: String,
  url: String,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date
});

module.exports = mongoose.model('Country', CountrySchema);