"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _require = require("../constants/envs"),
    ADMIN_ROLE = _require.ADMIN_ROLE,
    FARMER_ROLE = _require.FARMER_ROLE,
    PERSONNEL_ROLE = _require.PERSONNEL_ROLE,
    UNSIGNED_ROLE = _require.UNSIGNED_ROLE;

var _require2 = require("../server"),
    sendResponse = _require2.sendResponse;

var _require3 = require("../helpers/utils/util.token"),
    verifyAccessToken = _require3.verifyAccessToken;

var ProtectRoute = /*#__PURE__*/function () {
  function ProtectRoute() {
    _classCallCheck(this, ProtectRoute);
  }

  _createClass(ProtectRoute, [{
    key: "authenticate",
    value: function () {
      var _authenticate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var authorization, accessToken, _yield$verifyAccessTo, isVerified;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                authorization = req.headers.authorization;
                accessToken = null;

                if (authorization && authorization.startsWith('Bearer')) {
                  accessToken = authorization.split(' ')[1];
                }

                _context.next = 5;
                return verifyAccessToken(accessToken);

              case 5:
                _yield$verifyAccessTo = _context.sent;
                isVerified = _yield$verifyAccessTo.isVerified;

                if (isVerified) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 401,
                  isSuccess: false,
                  message: 'You are not authorized to access this route.'
                }));

              case 9:
                next();

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function authenticate(_x, _x2, _x3) {
        return _authenticate.apply(this, arguments);
      }

      return authenticate;
    }()
  }, {
    key: "verifyAdmin",
    value: function () {
      var _verifyAdmin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
        var authorization, accessToken, _yield$verifyAccessTo2, role;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                authorization = req.headers.authorization;
                accessToken = null;

                if (authorization && authorization.startsWith('Bearer')) {
                  accessToken = authorization.split(' ')[1];
                }

                _context2.next = 5;
                return verifyAccessToken(accessToken);

              case 5:
                _yield$verifyAccessTo2 = _context2.sent;
                role = _yield$verifyAccessTo2.role;

                if (!(role !== ADMIN_ROLE)) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 401,
                  isSuccess: false,
                  message: 'You are not authorized to access this route.'
                }));

              case 9:
                next();

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function verifyAdmin(_x4, _x5, _x6) {
        return _verifyAdmin.apply(this, arguments);
      }

      return verifyAdmin;
    }()
  }, {
    key: "verifyPersonnel",
    value: function () {
      var _verifyPersonnel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
        var authorization, accessToken, _yield$verifyAccessTo3, role;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                authorization = req.headers.authorization;
                accessToken = null;

                if (authorization && authorization.startsWith('Bearer')) {
                  accessToken = authorization.split(' ')[1];
                }

                _context3.next = 5;
                return verifyAccessToken(accessToken);

              case 5:
                _yield$verifyAccessTo3 = _context3.sent;
                role = _yield$verifyAccessTo3.role;

                if (!(role !== PERSONNEL_ROLE)) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 401,
                  isSuccess: false,
                  message: 'You are not authorized to access this route.'
                }));

              case 9:
                next();

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function verifyPersonnel(_x7, _x8, _x9) {
        return _verifyPersonnel.apply(this, arguments);
      }

      return verifyPersonnel;
    }()
  }, {
    key: "verifyFarmer",
    value: function () {
      var _verifyFarmer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
        var authorization, accessToken, _yield$verifyAccessTo4, role;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                authorization = req.headers.authorization;
                accessToken = null;

                if (authorization && authorization.startsWith('Bearer')) {
                  accessToken = authorization.split(' ')[1];
                }

                _context4.next = 5;
                return verifyAccessToken(accessToken);

              case 5:
                _yield$verifyAccessTo4 = _context4.sent;
                role = _yield$verifyAccessTo4.role;

                if (!(role !== FARMER_ROLE)) {
                  _context4.next = 9;
                  break;
                }

                return _context4.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 401,
                  isSuccess: false,
                  message: 'You are not authorized to access this route.'
                }));

              case 9:
                next();

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function verifyFarmer(_x10, _x11, _x12) {
        return _verifyFarmer.apply(this, arguments);
      }

      return verifyFarmer;
    }()
  }]);

  return ProtectRoute;
}();

module.exports = new ProtectRoute();