"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require("../constants/envs"),
    MYSQL_HOST = _require.MYSQL_HOST,
    MYSQL_USER = _require.MYSQL_USER,
    MYSQL_PASSWORD = _require.MYSQL_PASSWORD,
    MYSQL_DATABASE = _require.MYSQL_DATABASE,
    PORT = _require.PORT,
    HOST = _require.HOST;

var logger = require('morgan');

var cors = require('cors');

var globalConfig = require("./config.global");

var _require2 = require("../middlewares/middleware.error-handler"),
    errorHandler = _require2["default"];

module.exports = {
  app: {
    port: PORT,
    host: HOST,
    globalMiddlewares: [].concat(_toConsumableArray(globalConfig.middlewares), [cors({
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
      database: MYSQL_DATABASE
    }
  },
  mailjet: {
    api_key: 'your-mailjet-api-key',
    secret: 'your-mailjet-secret'
  }
};