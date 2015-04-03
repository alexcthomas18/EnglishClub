'use strict';

var _ = require('lodash');
var ListingSession = require('./listing_session.model');

// Get list of listing_sessions
exports.index = function(req, res) {
  ListingSession.find(function (err, listing_sessions) {
    if(err) { return handleError(res, err); }
    return res.json(200, listing_sessions);
  });
};

// Get a single listing_session
exports.show = function(req, res) {
  ListingSession.findById(req.params.id, function (err, listing_session) {
    if(err) { return handleError(res, err); }
    if(!listing_session) { return res.send(404); }
    return res.json(listing_session);
  });
};

// Creates a new listing_session in the DB.
exports.create = function(req, res) {
  ListingSession.create(req.body, function(err, listing_session) {
    if(err) { return handleError(res, err); }
    return res.json(201, listing_session);
  });
};

// Updates an existing listing_session in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  ListingSession.findById(req.params.id, function (err, listing_session) {
    if (err) { return handleError(res, err); }
    if(!listing_session) { return res.send(404); }
    var updated = _.merge(listing_session, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, listing_session);
    });
  });
};

// Deletes a listing_session from the DB.
exports.destroy = function(req, res) {
  ListingSession.findById(req.params.id, function (err, listing_session) {
    if(err) { return handleError(res, err); }
    if(!listing_session) { return res.send(404); }
    listing_session.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}