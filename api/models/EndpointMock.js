'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EndpointMockSchema = new Schema({
  path: {
    type: String,
    unique: true,
    required: 'Set the path to mock'
  },
  status: {
      type: Number,
      default: 200
  },
  responseData: {
    type: Object,
    default: {}
  }
});

module.exports = mongoose.model('Endpoints', EndpointMockSchema);