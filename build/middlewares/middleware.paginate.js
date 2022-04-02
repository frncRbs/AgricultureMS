"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var paginate = function paginate(model) {
  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var page, limit, startIndex, endIndex, results;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = parseInt(req.query.page);
              limit = parseInt(req.query.limit);
              startIndex = (page - 1) * limit;
              endIndex = page * limit;
              results = {};
              _context.t0 = endIndex;
              _context.next = 8;
              return model.countDocuments().exec();

            case 8:
              _context.t1 = _context.sent;

              if (!(_context.t0 < _context.t1)) {
                _context.next = 11;
                break;
              }

              results.next = {
                page: page + 1,
                limit: limit
              };

            case 11:
              if (startIndex > 0) {
                results.previous = {
                  page: page - 1,
                  limit: limit
                };
              }

              _context.next = 14;
              return model.find().limit(limit).skip(startIndex).exec();

            case 14:
              results.results = _context.sent;
              res.paginatedResults = results;
              next();

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

module.exports = {
  paginate: paginate
};