'use strict';

var _ = require('lodash');
var Listing = require('./listing.model');

// Get list of listings
exports.index = function(req, res) {
  
  var listings = Listing.find({});
  
  //REQ QUERY
  if(req.query.approved) {
    listings.where('approved').equals(req.query.approved);
  }
  if(req.query.limit) {
    listings.limit(req.query.limit);
  }
  if(req.query.sort) {
    listings.sort(req.query.sort);
  }
  
  listings.exec(function (err, listings) {
    if(err) { return handleError(res, err); }
    return res.json(200, listings);
  });
};

// Get a single listing
exports.show = function(req, res) {
  Listing.findById(req.params.id, function (err, listing) {
    if(err) { return handleError(res, err); }
    if(!listing) { return res.send(404); }
    return res.json(listing);
  });
};

// Creates a new listing in the DB.
exports.create = function(req, res) {
  for(var i=0;i<req.body.classes.length;i++) {
    var st = req.body.classes[i].start_time;
    req.body.classes[i].start_time_str = setTimeString(st);
    var et = req.body.classes[i].end_time;
    req.body.classes[i].end_time_str = setTimeString(et);
  }
  console.log(req.body);
  Listing.create(req.body, function(err, listing) {
    if(err) { return handleError(res, err); }
    return res.json(201, listing);
  });
};

// Updates an existing listing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { 
    delete req.body._id; 
  }
  Listing.findById(req.params.id, function (err, listing) {
    if (err) { 
      return handleError(res, err); 
    }
    if(!listing) { 
      return res.send(404); 
    }

    for(var i=0;i<req.body.classes.length;i++) {
      var st = req.body.classes[i].start_time;
      req.body.classes[i].start_time_str = setTimeString(st);
      var et = req.body.classes[i].end_time;
      req.body.classes[i].end_time_str = setTimeString(et);
    }

    var updated = _.extend(listing, req.body);
    updated.save(function (err) {
      if (err) { 
        return handleError(res, err); 
      }
      return res.json(200, listing);
    });
  });
};

// Deletes a listing from the DB.
exports.destroy = function(req, res) {
  Listing.findById(req.params.id, function (err, listing) {
    if(err) { return handleError(res, err); }
    if(!listing) { return res.send(404); }
    listing.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

function setTimeString(t) {
  var date = new Date(t);
  var hours = date.getHours();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours > 12 ? hours - 12 : hours;
  var minutes = "0" + date.getMinutes();

  return hours + ':' + minutes.substr(minutes.length-2)+ampm;
}