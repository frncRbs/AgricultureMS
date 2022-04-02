"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var validateFieldsFor = require("../validators/validate.auth.js");

var _require = require("../server"),
    sendResponse = _require.sendResponse;

var validate = function validate(routeFields) {
  if (!validateFieldsFor.hasOwnProperty(routeFields)) {
    console.log('Validator is not exits');
  }

  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var validated;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return validateFieldsFor[routeFields].validateAsync(req.body, {
                abortEarly: false
              });

            case 3:
              validated = _context.sent;
              req.body = validated;
              next();
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              sendResponse({
                res: res,
                statusCode: 406,
                isSuccess: false,
                message: _context.t0.message
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

module.exports = validate;