const { NODE_ENV } = require('constants/envs');

const devConfig = require('config.dev');
const prodConfig = require('config.prod');

module.exports = NODE_ENV === 'production' ? prodConfig : devConfig;