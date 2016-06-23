'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));


// Get available configurations
const configs = {
    base: require(path.join(__dirname, 'web/config/base')),
    dev: require(path.join(__dirname, 'web/config/dev')),
    prod: require(path.join(__dirname, 'web/config/prod'))
};

// List of allowed environments
const allowedEnvs = ['dev', 'prod'];

// Set the correct environment
let env;
if (args._.length > 0 && args._.indexOf('start') !== -1) {
    env = 'test';
} else if (args.env) {
    env = args.env;
} else {
    env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;

/**
 * Get an allowed environment
 * @param  {String}  env
 * @return {String}
 */
function getValidEnv(env) {
    var isValid = env && env.length > 0 && allowedEnvs.indexOf(env) !== -1;
    return isValid ? env : 'dev';
}

/**
 * Build the webpack configuration
 * @param  {String} env Environment to use
 * @return {Object} Webpack config
 */
function buildConfig(env) {
  console.log('building webpack.. current env:' + env);
    let usedEnv = getValidEnv(env);
    return configs[usedEnv];
}

module.exports = buildConfig(env);
