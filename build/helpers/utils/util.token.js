"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _require = require('jsonwebtoken'),
    sign = _require.sign,
    verify = _require.verify;

var _require2 = require("../../server"),
    sendResponse = _require2.sendResponse;

var _require3 = require("../../constants/envs"),
    ACCESS_TOKEN = _require3.ACCESS_TOKEN;

var _require4 = require("../../apis/v1/models/model.user"),
    User = _require4.User;

var _require5 = require("../../apis/v1/models/model.role"),
    Role = _require5.Role;

var Token = /*#__PURE__*/function () {
  function Token() {
    _classCallCheck(this, Token);
  }

  _createClass(Token, null, [{
    key: "signAccessToken",
    value: function () {
      var _signAccessToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var res, user, message, accessToken;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = _ref.res, user = _ref.user, message = _ref.message;
                accessToken = sign(_objectSpread({}, user), ACCESS_TOKEN, {
                  expiresIn: '7d'
                  /* 7 Days */

                });
                return _context.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 201,
                  isSuccess: true,
                  user: _objectSpread(_objectSpread({}, user), {}, {
                    accessToken: accessToken
                  }),
                  message: message
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function signAccessToken(_x) {
        return _signAccessToken.apply(this, arguments);
      }

      return signAccessToken;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var ip, cookie;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ip = req.ip, cookie = req.cookie;
                /* Set Cookie */
                // setAccessTokenCookie(res, token);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function refreshAccessToken(_x2, _x3) {
        return _refreshAccessToken.apply(this, arguments);
      }

      return refreshAccessToken;
    }()
  }, {
    key: "verifyAccessToken",
    value: function () {
      var _verifyAccessToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(accessToken) {
        var _verify, username, role, _user, _roleFromDb;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (accessToken) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", {
                  isVerified: false,
                  username: null
                });

              case 2:
                _verify = verify(accessToken, ACCESS_TOKEN), username = _verify.username, role = _verify.role;
                _context3.next = 5;
                return User.findOne({
                  username: username
                });

              case 5:
                _user = _context3.sent;
                _context3.next = 8;
                return Role.findOne({
                  id: _user[0].roleId
                });

              case 8:
                _roleFromDb = _context3.sent;

                if (!(username !== _user[0].username && role !== _roleFromDb[0].role)) {
                  _context3.next = 11;
                  break;
                }

                return _context3.abrupt("return", {
                  isVerified: false,
                  username: null
                });

              case 11:
                return _context3.abrupt("return", {
                  isVerified: true,
                  username: username,
                  role: role
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function verifyAccessToken(_x4) {
        return _verifyAccessToken.apply(this, arguments);
      }

      return verifyAccessToken;
    }()
  }]);

  return Token;
}();

module.exports = Token;