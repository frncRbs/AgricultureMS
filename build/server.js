"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var mysql = require('mysql2');

var configs = require("./configs");

var express = require('express');

var ApiError = require("./helpers/utils/util.api.error");

var Server = /*#__PURE__*/function () {
  function Server() {
    (0, _classCallCheck2["default"])(this, Server);
    (0, _defineProperty2["default"])(this, "_app", express());
  }

  (0, _createClass2["default"])(Server, [{
    key: "run",
    value: function run() {
      var _this = this;

      this._app.listen(configs.app.port, /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("\n\n\u2705 http://".concat(configs.app.host, ":").concat(configs.app.port));
                _context.next = 3;
                return _this.setConnection();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));

      process.setMaxListeners(0);
      process.on('SIGTERM', function () {
        process.close(function () {
          console.log("Server Terminated.");
        });
      });
    }
  }, {
    key: "setGlobalMiddlewares",
    value: function setGlobalMiddlewares(globalMiddlewares) {
      var _this2 = this;

      globalMiddlewares.map(function (middleware) {
        _this2._app.use(middleware);
      });
    }
  }, {
    key: "setControllers",
    value: function setControllers(controllers) {
      var _this3 = this;

      controllers.forEach(function (controller) {
        _this3._app.use(controller.path, controller.setRoutes());
      });
    }
  }, {
    key: "setConnection",
    value: function setConnection(query, data) {
      var db = mysql.createPool(configs.db.mysql);
      return new Promise(function (resolve, reject) {
        return db.getConnection(function (err, sql) {
          if (err) {
            reject(err);
          }

          if (query) {
            sql.query(query, data && (0, _toConsumableArray2["default"])(data), function (err, results) {
              if (err) reject(err);else resolve(results);
              sql.release();
            });
          }
        });
      });
    }
  }, {
    key: "sendResponse",
    value: function sendResponse(_ref2) {
      var res = _ref2.res,
          statusCode = _ref2.statusCode,
          isSuccess = _ref2.isSuccess,
          message = _ref2.message,
          _ref2$data = _ref2.data,
          data = _ref2$data === void 0 ? {} || [] : _ref2$data,
          _ref2$user = _ref2.user,
          user = _ref2$user === void 0 ? {} : _ref2$user;

      /* Error Response */
      if (!isSuccess) new ApiError(message, statusCode);
      /* Success Response */

      Object.keys(user).length ? res.status(statusCode).json({
        isSuccess: isSuccess,
        message: message,
        user: user // {username, role, isActivated, accessToken}

      }) : Object.keys(data).length ? res.status(statusCode).json({
        isSuccess: isSuccess,
        message: message,
        data: data // {}

      }) : res.status(statusCode).json({
        isSuccess: isSuccess,
        message: message
      });
    }
  }]);
  return Server;
}();

var server = new Server();
module.exports = server;