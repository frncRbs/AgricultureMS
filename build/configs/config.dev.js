"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _require = require("../constants/envs"),
    MYSQL_HOST = _require.MYSQL_HOST,
    MYSQL_USER = _require.MYSQL_USER,
    MYSQL_PASSWORD = _require.MYSQL_PASSWORD,
    MYSQL_DATABASE = _require.MYSQL_DATABASE,
    PORT = _require.PORT,
    HOST = _require.HOST,
    MYSQL_PORT = _require.MYSQL_PORT;

var logger = require('morgan');

var cors = require('cors');

var globalConfig = require("./config.global");

var _require2 = require("../middlewares/middleware.error-handler"),
    errorHandler = _require2["default"];

module.exports = {
  app: {
    port: PORT,
    host: HOST,
    globalMiddlewares: [].concat((0, _toConsumableArray2["default"])(globalConfig.middlewares), [cors({
      origin: 'http://localhost:3000'
    }),
    /* Dev Middlware */
    logger('dev'), errorHandler])
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