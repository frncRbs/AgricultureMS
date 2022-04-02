"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _require = require("../../../server"),
    setConnection = _require.setConnection;

var mapObjectKey = require("../../../helpers/utils/util.map.object-key");
/**
 * @desc This class is concerning SQL relational tables. This is responsible for handling a relationship between two or more tables.
 */


var Relation = /*#__PURE__*/function () {
  function Relation() {
    (0, _classCallCheck2["default"])(this, Relation);
  }

  (0, _createClass2["default"])(Relation, null, [{
    key: "insert",
    value: function () {
      var _insert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data, table) {
        var _mapObjectKey, toPlaceholder, toObjectValue, sql, response;

        return _regenerator["default"].wrap(function _callee$(_context) {
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