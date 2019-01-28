var express = require('express'),
   bodyParser = require('body-parser'),
    mongoose = require('mongoose')
    
var Log = require('./Logger')
var APIHandler = require('./ApiFallbackHandler')
var mockHandler = require('./MockHandler.js')

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Endpoints', {connectTimeoutMS: 3000, useNewUrlParser: true})
        .catch(function(err){ console.log('MongoDB server down\n'+err) }) 

var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.raw());

app.use(function(req,res, next) {        
    if (req.method == 'OPTIONS') {
        console.log('pinging OPTIONS method')
        res.status(200).send("OK")
    } else {
        next()
    }
})

var routes = require('./api/routes/EndpointMockRoutes'); //importing route
routes(app, mongoose); //register the route

app.use(mockHandler)
app.use(APIHandler.fallback)

// app.use(Log.logger)
// app.use(function(req, res) {
//     res.status(404).send("Not found")
// })
app.listen(port);

console.log('API MockServer started on: ' + port);
