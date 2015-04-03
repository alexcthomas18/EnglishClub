'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SysAdminSchema = new Schema({
  email: String,
  password: String
});

module.exports = mongoose.model('SysAdmin', SysAdminSchema);