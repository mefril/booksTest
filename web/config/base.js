'use strict';

let path = require('path');
let webpack = require('webpack');

let srcPath = '/../src/';
let srcPathResolver = path.join(__dirname, srcPath);
let buildPath = '/../build';
let publicPath = '/';

module.exports = {
    output: {
        path: path.join(__dirname, buildPath),
        filename: 'bundle.js',
        publicPath: publicPath
    },
    port: 8080,
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: srcPathResolver
        }, {
            test: /\.less$/,
            loader: "less"
        }]
    },
    resolve: {
        extensions: ['', '.js'],
        alias: {
            components: srcPathResolver + '/js/components/',
            styles: srcPathResolver + '/styles/',
        }
    }
};
