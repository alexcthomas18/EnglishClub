/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var SysAdmin = require('./sys_admin.model');

exports.register = function(socket) {
  SysAdmin.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  SysAdmin.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('sys_admin:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('sys_admin:remove', doc);
}