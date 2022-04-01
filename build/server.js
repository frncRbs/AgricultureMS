"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mysql = require('mysql2');

var configs = require("./configs");

var express = require('express');

var ApiError = require("./helpers/utils/util.api.error");

var Server = /*#__PURE__*/function () {
  function Server() {
    _classCallCheck(this, Server);

    _defineProperty(this, "_app", express());
  }

  _createClass(Server, [{
    key: "run",
    value: function run() {
      var _this = this;

      this._app.listen(configs.app.port, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
            sql.query(query, data && _toConsumableArray(data), function (err, results) {
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