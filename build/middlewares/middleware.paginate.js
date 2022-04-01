"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var paginate = function paginate(model) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var page, limit, startIndex, endIndex, results;
      return regeneratorRuntime.wrap(function _callee$(_context) {
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