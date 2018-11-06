'use strict';
var Endpoint = require('./api/models/EndpointMock')

module.exports = function (req, res, next) {
    let path = req.url
    let method = req.method
    console.log("MongoDB finding path: '" + path + "'")
    let query = {'path': path, 'method': method}
    
    Endpoint.findOne(query, function(err, mock) {
        if (err != undefined || mock == undefined || mock == null || mock == "") {
            next()
            return
        }
        console.log("Mocked data: \n" + mock)
        let status = mock.status != undefined ? mock.status : 201
        mock.responseData.mocked = true
        mock.responseData.mockId = mock._id
        res.status(status).json(mock.responseData)
    })
};
        


