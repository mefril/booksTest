const path = require('path');
const express = require('express');
const config = require('./web/config/dev');
const service = require('./server/service');
const app = express();

app.use("/api/:type/:param", function (req, res) {
    let requestType = req.params.type;
    let requestParam = req.params.param;
    
    service.getData(requestType,requestParam).then((result)=> {
        res.send(result);
    });
});

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
