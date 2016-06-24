const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./web/config/dev');
const service = require('./server/service');
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use("/api/:type/:param?", function (req, res) {
    let requestType = req.params.type;
    let requestParam = req.params.param;

    service.getData(requestType,requestParam).then((result)=> {
        res.send(result);
    });
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'web/src/index.html'));
});

app.listen(config.port, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Server started at port:' + config.port);
    console.log('Building webpack...');
});
