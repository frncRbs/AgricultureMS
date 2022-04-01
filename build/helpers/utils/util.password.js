"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(username, userPassword) {
    var user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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