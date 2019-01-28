'use strict';

var mongoose = require('mongoose'),
    Endpoint = mongoose.model('Endpoints');

exports.list = function(req, res) {
    Endpoint.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create = function(req, res) {
  var newMock = new Endpoint(req.body);
  newMock.save(function(err, task) {
    if (err)
      res.status(500).send(err);
    res.json(task);
  });
};

exports.get = function(req, res) {
  Endpoint.findById(req.params.path, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update = function(req, res) {
  Endpoint.findOneAndUpdate({_id: req.params.path}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete = function(req, res) {
  Endpoint.remove({
    _id: req.params.path
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Mocked endpoint successfully deleted' });
  });
};