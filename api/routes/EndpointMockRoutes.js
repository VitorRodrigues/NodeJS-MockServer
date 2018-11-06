'use strict';
var bodyParser = require('body-parser')

module.exports = function(app) {
  var endpointMock = require('../controllers/MockController');

  app.route('/mocks')
    .all(bodyParser.json())
    .get(endpointMock.list)
    .post(endpointMock.create);

  app.route('/mocks/:path')
    .get(endpointMock.get)
    .put(endpointMock.update)
    .delete(endpointMock.delete);
};