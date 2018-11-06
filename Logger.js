'use strict';

var bodyParser = require('body-parser')

function logResponseBody(res) {
  var oldWrite = res.write,
      oldEnd = res.end;

  var chunks = [];

  res.write = function (chunk) {
    chunks.push(new Buffer(chunk));
    oldWrite.apply(res, arguments);
  };

  res.end = function (chunk) {
    if (chunk) {
      chunks.push(new Buffer(chunk));
    }
    var body = Buffer.concat(chunks).toString('utf8');
    // console.log('RESPONSE: ' + res.statusCode);
    console.log('DATA: ' + body);

    oldEnd.apply(res, arguments);
  };
}
function composeUrl(req) {
  return req.protocol + '://' + req.hostname + req.path
}
exports.logger = function (req, res, next) {
  console.log('------------------------');
  console.log('REQUEST:\n' + composeUrl(req) + '\n' + JSON.stringify(req.body));
  console.log('\n');
  //logResponseBody(res);
  next();
};