/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var ListingSession = require('./listing_session.model');

exports.register = function(socket) {
  ListingSession.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  ListingSession.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('listing_session:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('listing_session:remove', doc);
}