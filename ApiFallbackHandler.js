'use strict';

const request = require('request')
var querystring = require('querystring')
let proxyData = require('./proxy')

exports.fallback = function(req, res, next) {
    console.log('FALLBACK ------ ')
    const apiHost = proxyData.host
    const protocol = req.protocol
    const apiPath = req.originalUrl
    const params = querystring.stringify(req.query)
    const url = protocol + "://" + apiHost + apiPath + ( params != "" ? "?" + params : "")
    console.log('FORWARDING TO: ' + req.method +  ' '+ url)
    var proxy = request(url, {method: req.method});
    req.pipe(proxy);
    proxy.pipe(res, {
        end: true
    });
}