"use strict";

var _require = require("../constants/envs"),
    NODE_ENV = _require.NODE_ENV;

var devConfig = require("./config.dev");

var prodConfig = require("./config.prod");

module.exports = NODE_ENV === 'production' ? prodConfig : devConfig;