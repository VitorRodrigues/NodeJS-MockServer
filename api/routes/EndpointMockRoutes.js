'use strict';

module.exports = function(app) {
  var endpointMock = require('../controllers/MockController');

  // todoList Routes
  app.route('/mocks')
    .get(endpointMock.list)
    .post(endpointMock.create);

  app.route('/mocks/:path')
    .get(endpointMock.get)
    .put(endpointMock.update)
    .delete(endpointMock.delete);
};