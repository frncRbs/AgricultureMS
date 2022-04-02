"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('bcryptjs'),
    genSaltSync = _require.genSaltSync,
    hashSync = _require.hashSync,
    compareSync = _require.compareSync;

var _require2 = require("../../apis/v1/models/model.user"),
    User = _require2.User;

var hashPassword = function hashPassword(password) {
  var salt = genSaltSync(10);
  var hashPassword = hashSync(password, salt);
  return hashPassword;
};

var comparePassword = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username, userPassword) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return User.findOne({
              username: username
            });

          case 2:
            user = _context.sent;

            if (user.length) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", false);

          case 5:
            return _context.abrupt("return", compareSync(userPassword, user[0].password));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function comparePassword(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  hashPassword: hashPassword,
  comparePassword: comparePassword
};