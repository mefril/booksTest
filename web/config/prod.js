'use strict';

var path = require('path');
var webpack = require('webpack');
let _ = require('lodash');

let baseConfig = require('./base');


let config = _.merge({
    devtool: 'source-map',
    entry: [
        './web/src/js/index'
    ],
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ]
}, baseConfig);

module.exports = config;
