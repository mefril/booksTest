'use strict';

let path = require('path');
let webpack = require('webpack');

let srcPath = '/../src/';
let srcPathResolver = path.join(__dirname, srcPath);
let buildPath = '/../build';
let publicPath = '/';
let npmBase = path.join(__dirname, '/../node_modules');
let additionalPaths = [path.join(npmBase, 'bootstrap-loader')];

module.exports = {
    additionalPaths: additionalPaths,
    output: {
        path: path.join(__dirname, buildPath),
        filename: 'bundle.js',
        publicPath: publicPath
    },
    port: 8081,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: srcPathResolver
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: srcPathResolver
            },
            {
                test: /\.sass/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax',
                include: srcPathResolver
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded',
                include: srcPathResolver
            },
            {
                test: /\.json/,
                loader: 'json'
            }, {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf$/, loader: "file-loader"},
            {test: /\.eot$/, loader: "file-loader"},
            {test: /\.svg$/, loader: "file-loader"}]
    },
    resolve: {
        extensions: ['', '.js'],
        alias: {
            components: srcPathResolver + '/js/components/',
            styles: srcPathResolver + '/styles/',
            utils: srcPathResolver + '/js/utils'
        }
    }
};
