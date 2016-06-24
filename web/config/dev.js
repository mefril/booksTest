'use strict';
let path = require('path');
let webpack = require('webpack');
let _ = require('lodash');
let baseConfig = require('./base');

let config = _.merge({
    devtool: 'cheap-module-eval-source-map',
    port: 4000,
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client',
        './web/src/js/index.js'
    ],
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.HotModuleReplacementPlugin,
        new webpack.NoErrorsPlugin()
    ]
}, baseConfig);

module.exports = config;
