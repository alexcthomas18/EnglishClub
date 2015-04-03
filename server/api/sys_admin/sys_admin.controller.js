'use strict';

var _ = require('lodash');
var SysAdmin = require('./sys_admin.model');

// Get list of sys_admins
exports.index = function(req, res) {
  SysAdmin.find(function (err, sys_admins) {
    if(err) { return handleError(res, err); }
    return res.json(200, sys_admins);
  });
};

// Get a single sys_admin
exports.show = function(req, res) {
  SysAdmin.findById(req.params.id, function (err, sys_admin) {
    if(err) { return handleError(res, err); }
    if(!sys_admin) { return res.send(404); }
    return res.json(sys_admin);
  });
};

// Creates a new sys_admin in the DB.
exports.create = function(req, res) {
  SysAdmin.create(req.body, function(err, sys_admin) {
    if(err) { return handleError(res, err); }
    return res.json(201, sys_admin);
  });
};

// Updates an existing sys_admin in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  SysAdmin.findById(req.params.id, function (err, sys_admin) {
    if (err) { return handleError(res, err); }
    if(!sys_admin) { return res.send(404); }
    var updated = _.merge(sys_admin, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, sys_admin);
    });
  });
};

// Deletes a sys_admin from the DB.
exports.destroy = function(req, res) {
  SysAdmin.findById(req.params.id, function (err, sys_admin) {
    if(err) { return handleError(res, err); }
    if(!sys_admin) { return res.send(404); }
    sys_admin.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}