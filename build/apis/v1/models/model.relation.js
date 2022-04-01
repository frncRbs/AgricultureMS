"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _require = require("../../../server"),
    setConnection = _require.setConnection;

var mapObjectKey = require("../../../helpers/utils/util.map.object-key");
/**
 * @desc This class is concerning SQL relational tables. This is responsible for handling a relationship between two or more tables.
 */


var Relation = /*#__PURE__*/function () {
  function Relation() {
    _classCallCheck(this, Relation);
  }

  _createClass(Relation, null, [{
    key: "insert",
    value: function () {
      var _insert = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data, table) {
        var _mapObjectKey, toPlaceholder, toObjectValue, sql, response;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _mapObjectKey = mapObjectKey(data), toPlaceholder = _mapObjectKey.toPlaceholder, toObjectValue = _mapObjectKey.toObjectValue;
                sql = "INSERT IGNORE INTO ".concat(table, " SET ").concat(toPlaceholder);
                _context.next = 4;
                return setConnection(sql, toObjectValue);

              case 4:
                response = _context.sent;
                console.log({
                  relationResponse: response
                });
                return _context.abrupt("return", response);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function insert(_x, _x2) {
        return _insert.apply(this, arguments);
      }

      return insert;
    }()
  }]);

  return Relation;
}();

module.exports = {
  Relation: Relation
};