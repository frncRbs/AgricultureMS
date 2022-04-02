"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _require = require("../../../server"),
    sendResponse = _require.sendResponse,
    setConnection = _require.setConnection;

var _require2 = require("../../../helpers/utils/util.token"),
    signAccessToken = _require2.signAccessToken,
    verifyAccessToken = _require2.verifyAccessToken;

var authService = require("./auth.service");

var AuthController = /*#__PURE__*/function () {
  function AuthController() {
    (0, _classCallCheck2["default"])(this, AuthController);
  }

  (0, _createClass2["default"])(AuthController, [{
    key: "login",
    value:
    /* Login */
    function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, username, password, _yield$authService$lo, isPasswordMatch, userFromDatabase;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, username = _req$body.username, password = _req$body.password;
                _context.next = 3;
                return authService.login({
                  username: username,
                  password: password
                });

              case 3:
                _yield$authService$lo = _context.sent;
                isPasswordMatch = _yield$authService$lo.isPasswordMatch;
                userFromDatabase = _yield$authService$lo.userFromDatabase;

                if (userFromDatabase.length) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 401,
                  message: 'Invalid username or password',
                  isSuccess: false
                }));

              case 8:
                if (isPasswordMatch) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 401,
                  isSuccess: false,
                  message: 'Invalid username or password'
                }));

              case 10:
                return _context.abrupt("return", signAccessToken({
                  res: res,
                  user: {
                    username: userFromDatabase[0].username,
                    firstname: userFromDatabase[0].firstname,
                    role: userFromDatabase[0].role,
                    id: userFromDatabase[0].id,
                    isActivated: userFromDatabase[0].isActivated
                  },
                  message: 'You are now authenticated!'
                }));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function login(_x, _x2) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
    /* Register */

  }, {
    key: "register",
    value: function () {
      var _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var newUser, _yield$authService$re, create, isAlreadyRegistered, isMobileAlreadyExist;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                newUser = req.body;
                _context2.next = 3;
                return authService.register(newUser);

              case 3:
                _yield$authService$re = _context2.sent;
                create = _yield$authService$re.create;
                isAlreadyRegistered = _yield$authService$re.isAlreadyRegistered;
                isMobileAlreadyExist = _yield$authService$re.isMobileAlreadyExist;

                if (!isAlreadyRegistered.length) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 401,
                  isSuccess: false,
                  message: 'Invalid username or password.'
                }));

              case 9:
                if (!isMobileAlreadyExist.length) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 401,
                  isSuccess: false,
                  message: 'Mobile number is already exist.'
                }));

              case 11:
                _context2.next = 13;
                return create();

              case 13:
                return _context2.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 201,
                  isSuccess: true,
                  message: 'Account Successfully Created!',
                  user: {
                    firstname: newUser.firstname
                  }
                }));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function register(_x3, _x4) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
    /* Logout */

  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var _req$cookies, accessToken, refreshToken;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$cookies = req.cookies, accessToken = _req$cookies.accessToken, refreshToken = _req$cookies.refreshToken;
                req.headers['Authorization'] = null;
                _context3.next = 4;
                return authService.logout({
                  accessToken: accessToken,
                  refreshToken: refreshToken,
                  res: res
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function logout(_x5, _x6) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
    /* Get Header */

  }, {
    key: "getHeaderAuth",
    value: function () {
      var _getHeaderAuth = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var authorization, accessToken;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                authorization = req.headers.authorization;
                accessToken = null;

                if (authorization && authorization.startsWidth('Bearer')) {
                  accessToken = authorization.split(' ')[1];
                }

                return _context4.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 200,
                  isSuccess: true,
                  message: 'Request header sent!\n',
                  accessToken: accessToken
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getHeaderAuth(_x7, _x8) {
        return _getHeaderAuth.apply(this, arguments);
      }

      return getHeaderAuth;
    }()
    /* Change Password */

  }, {
    key: "changePassword",
    value: function () {
      var _changePassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var accessToken, _req$body2, currentPassword, newPassword, _yield$authService$ch, isVerified, updatePassword, isPasswordMatch;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                accessToken = req.headers.authorization.split(' ')[1];
                _req$body2 = req.body, currentPassword = _req$body2.currentPassword, newPassword = _req$body2.newPassword;
                _context5.next = 4;
                return authService.changePassword({
                  accessToken: accessToken,
                  currentPassword: currentPassword,
                  newPassword: newPassword
                });

              case 4:
                _yield$authService$ch = _context5.sent;
                isVerified = _yield$authService$ch.isVerified;
                updatePassword = _yield$authService$ch.updatePassword;
                isPasswordMatch = _yield$authService$ch.isPasswordMatch;

                if (isVerified) {
                  _context5.next = 10;
                  break;
                }

                return _context5.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 401,
                  isSuccess: false,
                  message: 'Unauthorized'
                }));

              case 10:
                if (isPasswordMatch) {
                  _context5.next = 12;
                  break;
                }

                return _context5.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 401,
                  isSuccess: false,
                  message: 'Invalid Password.'
                }));

              case 12:
                _context5.next = 14;
                return updatePassword();

              case 14:
                return _context5.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 200,
                  isSuccess: true,
                  message: 'Password successfully changed!'
                }));

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function changePassword(_x9, _x10) {
        return _changePassword.apply(this, arguments);
      }

      return changePassword;
    }()
    /* Forgot Password */

  }, {
    key: "forgotPassword",
    value: function () {
      var _forgotPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var mobileNumber;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                mobileNumber = req.body.mobileNumber;

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function forgotPassword(_x11, _x12) {
        return _forgotPassword.apply(this, arguments);
      }

      return forgotPassword;
    }()
  }]);
  return AuthController;
}();

module.exports = new AuthController();