var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./web/config/prod');

var app = express();

// Proxy api requests
// app.use("/api/*", function (req, res) {
//     req.url = req.originalUrl;
//     apiProxy.web(req, res, {
//         target: {
//             port: config.restPort,
//             host: config.restHost
//         }
//     });
// });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'web/src/index.html'));
});

app.get('/bundle.js', function (req, res) {
  
    res.sendFile(path.join(__dirname, 'web/build/bundle.js'));
});

app.listen(config.port, function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Server started at port:' + config.port);
});
