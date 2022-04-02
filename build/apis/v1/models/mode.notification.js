"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _require = require("../../../server"),
    setConnection = _require.setConnection;

var mapObjectKey = require("../../../helpers/utils/util.map.object-key");

var Notification = /*#__PURE__*/function () {
  function Notification() {
    (0, _classCallCheck2["default"])(this, Notification);
  }
  /**
   * @param - Object {identifier}
   * @returns - Array
   */


  (0, _createClass2["default"])(Notification, null, [{
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(identifier) {
        var _mapObjectKey, toPlaceholder, toObjectValue, sql, response;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _mapObjectKey = mapObjectKey(identifier), toPlaceholder = _mapObjectKey.toPlaceholder, toObjectValue = _mapObjectKey.toObjectValue;
                sql = "SELECT * FROM notifications WHERE ".concat(toPlaceholder, " LIMIT 1");
                console.log({
                  sql: sql
                });
                _context.next = 5;
                return setConnection(sql, toObjectValue);

              case 5:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findAll(_x) {
        return _findAll.apply(this, arguments);
      }

      return findAll;
    }()
  }]);
  return Notification;
}();

module.exports = {
  Notification: Notification
};