'use strict';
var express = require('express')
var bodyParser = require('body-parser')

module.exports = function(app) {
  var endpointMock = require('../controllers/MockController');

  var mocks = express.Router()

  // mocks.route
  // mocks.use(bodyParser.json());
  // mocks.get('/mocks', endpointMock.list)
  // mocks.post('/mocks', endpointMock.create);
  // todoList Routes
  app.route('/mocks')
    .all(bodyParser.json())
    .get(endpointMock.list)
    .post(endpointMock.create);

  app.route('/mocks/:path')
    .get(endpointMock.get)
    .put(endpointMock.update)
    .delete(endpointMock.delete);
};