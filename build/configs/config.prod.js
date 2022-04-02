"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _cors;

var express = require('express');

var path = require('path');

var _require = require("../constants/envs"),
    MYSQL_HOST = _require.MYSQL_HOST,
    MYSQL_USER = _require.MYSQL_USER,
    MYSQL_PASSWORD = _require.MYSQL_PASSWORD,
    MYSQL_DATABASE = _require.MYSQL_DATABASE,
    PORT = _require.PORT,
    HOST = _require.HOST,
    MYSQL_PORT = _require.MYSQL_PORT,
    CLIENT_HOST = _require.CLIENT_HOST;

var cors = require('cors');

var globalConfig = require("./config.global");

module.exports = {
  app: {
    port: PORT,
    host: HOST,
    globalMiddlewares: [].concat((0, _toConsumableArray2["default"])(globalConfig.middlewares), [cors((_cors = {
      origin: CLIENT_HOST,
      optionsSuccessStatus: 200
    }, (0, _defineProperty2["default"])(_cors, "origin", '*'), (0, _defineProperty2["default"])(_cors, "methods", 'GET,HEAD,PUT,PATCH,POST,DELETE'), _cors)) // express.static(path.join(__dirname, '/client/build')),
    ])
  },
  db: {
    mysql: {
      host: MYSQL_HOST,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE,
      port: MYSQL_PORT
    }
  },
  mailjet: {
    api_key: 'your-mailjet-api-key',
    secret: 'your-mailjet-secret'
  }
};