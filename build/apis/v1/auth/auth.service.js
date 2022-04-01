"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _require = require("../models/model.user"),
    User = _require.User;

var _require2 = require("../models/model.role"),
    Role = _require2.Role;

var _require3 = require("../../../helpers/utils/util.password"),
    comparePassword = _require3.comparePassword,
    hashPassword = _require3.hashPassword;

var _require4 = require("../../../helpers/utils/util.cookies"),
    removeCookie = _require4.removeCookie;

var _require5 = require("../../../constants/envs"),
    FARMER_ROLE = _require5.FARMER_ROLE;

var _require6 = require("../../../helpers/utils/util.token"),
    verifyAccessToken = _require6.verifyAccessToken;

var _require7 = require("../../../helpers/utils/util.truthy-object"),
    filterTruthyObject = _require7.filterTruthyObject;

var _require8 = require("../../../helpers/utils/util.date"),
    getDate = _require8.getDate;

var AuthService = /*#__PURE__*/function () {
  function AuthService() {
    _classCallCheck(this, AuthService);
  }

  _createClass(AuthService, [{
    key: "login",
    value:
    /* Login Service */
    function () {
      var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var username, password, userFromDatabase, isPasswordMatch;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = _ref.username, password = _ref.password;
                _context.next = 3;
                return User.findOne({
                  username: username
                });

              case 3:
                userFromDatabase = _context.sent;
                _context.next = 6;
                return comparePassword(username, password);

              case 6:
                isPasswordMatch = _context.sent;
                return _context.abrupt("return", {
                  isPasswordMatch: isPasswordMatch,
                  userFromDatabase: userFromDatabase
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function login(_x) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
    /* Register Service */

  }, {
    key: "register",
    value: function () {
      var _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(user) {
        var username, password, mobileNumber, isAlreadyRegistered, isMobileAlreadyExist, newUser;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                username = user.username, password = user.password, mobileNumber = user.mobileNumber;
                _context3.next = 3;
                return User.findOne({
                  username: username
                });

              case 3:
                isAlreadyRegistered = _context3.sent;
                _context3.next = 6;
                return User.findOne({
                  mobileNumber: mobileNumber
                });

              case 6:
                isMobileAlreadyExist = _context3.sent;
                newUser = filterTruthyObject({}, _objectSpread(_objectSpread({}, user), {}, {
                  role: FARMER_ROLE,
                  // optional, as the default values for this in mysql database was 'farmer'
                  password: hashPassword(password),
                  createdAt: getDate(),

                  /* Ignored from users table */
                  position: null,
                  confirmPassword: null,
                  civilStatus: null,
                  religion: null,
                  street: null,
                  subdivision: null,
                  sitio: null,
                  barangay: null,
                  municipality: null,
                  zipCode: null
                }));
                return _context3.abrupt("return", {
                  isAlreadyRegistered: isAlreadyRegistered,
                  isMobileAlreadyExist: isMobileAlreadyExist,
                  create: function () {
                    var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                      var _createdUser;

                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return User.create(newUser);

                            case 2:
                              _createdUser = _context2.sent;
                              _context2.next = 5;
                              return _createdUser.joinTable('Farmers', {
                                id: _createdUser.insertId,
                                position: user.position,
                                civilStatus: user.civilStatus,
                                religion: user.religion
                              });

                            case 5:
                              _context2.next = 7;
                              return _createdUser.joinTable('FarmersAddresses', {
                                farmerId: _createdUser.insertId,
                                street: user.street,
                                subdivision: user.subdivision,
                                sitio: user.sitio,
                                barangay: user.barangay,
                                municipality: user.municipality,
                                zipCode: user.zipCode
                              });

                            case 7:
                              _context2.next = 9;
                              return Role.create({
                                id: _createdUser.insertId,
                                role: FARMER_ROLE
                              });

                            case 9:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    function create() {
                      return _create.apply(this, arguments);
                    }

                    return create;
                  }()
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function register(_x2) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
    /* Logout Service */

  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref2) {
        var accessToken, refreshToken, res;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                accessToken = _ref2.accessToken, refreshToken = _ref2.refreshToken, res = _ref2.res;
                _context4.next = 3;
                return removeCookie(res, accessToken);

              case 3:
                _context4.next = 5;
                return removeCookie(res, refreshToken);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function logout(_x3) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
    /* Change Password Service*/

  }, {
    key: "changePassword",
    value: function () {
      var _changePassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref3) {
        var accessToken, currentPassword, newPassword, req, _yield$verifyAccessTo, isVerified, username, isPasswordMatch;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                accessToken = _ref3.accessToken, currentPassword = _ref3.currentPassword, newPassword = _ref3.newPassword, req = _ref3.req;
                _context6.next = 3;
                return verifyAccessToken(accessToken);

              case 3:
                _yield$verifyAccessTo = _context6.sent;
                isVerified = _yield$verifyAccessTo.isVerified;
                username = _yield$verifyAccessTo.username;
                _context6.next = 8;
                return comparePassword(username, currentPassword);

              case 8:
                isPasswordMatch = _context6.sent;
                return _context6.abrupt("return", {
                  isVerified: isVerified,
                  isPasswordMatch: isPasswordMatch,
                  updatePassword: function () {
                    var _updatePassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                      return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              _context5.next = 2;
                              return User.updateOne({
                                username: username
                              }, {
                                password: hashPassword(newPassword)
                              });

                            case 2:
                              return _context5.abrupt("return", _context5.sent);

                            case 3:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5);
                    }));

                    function updatePassword() {
                      return _updatePassword.apply(this, arguments);
                    }

                    return updatePassword;
                  }()
                });

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function changePassword(_x4) {
        return _changePassword.apply(this, arguments);
      }

      return changePassword;
    }()
  }]);

  return AuthService;
}();

var authService = new AuthService();
module.exports = authService;