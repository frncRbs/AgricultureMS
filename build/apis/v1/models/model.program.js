"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _require = require("../../../server"),
    setConnection = _require.setConnection;

var mapObjectKey = require("../../../helpers/utils/util.map.object-key");

var Program = /*#__PURE__*/function () {
  function Program() {
    (0, _classCallCheck2["default"])(this, Program);
  }
  /**
   * @param - Object {identifier}
   * @returns - Array [data]
   */


  (0, _createClass2["default"])(Program, null, [{
    key: "findOne",
    value: function () {
      var _findOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(identifier) {
        var _mapObjectKey, toPlaceholder, toObjectValue, sql, response;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _mapObjectKey = mapObjectKey(identifier), toPlaceholder = _mapObjectKey.toPlaceholder, toObjectValue = _mapObjectKey.toObjectValue;
                sql = "SELECT * FROM programs WHERE ".concat(toPlaceholder);
                _context.next = 4;
                return setConnection(sql, toObjectValue);

              case 4:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findOne(_x) {
        return _findOne.apply(this, arguments);
      }

      return findOne;
    }()
    /**
     * @param - Object {identifier}
     * @returns - Array [data]
     */

  }, {
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(table) {
        var sql, response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sql = "SELECT name, id, optionalType FROM ".concat(table);
                _context2.next = 3;
                return setConnection(sql);

              case 3:
                response = _context2.sent;
                return _context2.abrupt("return", response);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function findAll(_x2) {
        return _findAll.apply(this, arguments);
      }

      return findAll;
    }()
    /**
     * @param - Object {data}
     * @returns - Array [data]
     */

  }, {
    key: "insert",
    value: function () {
      var _insert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(table, data) {
        var _mapObjectKey2, toPlaceholder, toObjectValue, sql, _createdProgram, response;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _mapObjectKey2 = mapObjectKey(data), toPlaceholder = _mapObjectKey2.toPlaceholder, toObjectValue = _mapObjectKey2.toObjectValue;
                sql = "INSERT INTO ".concat(table, " SET ").concat(toPlaceholder);
                _context4.next = 4;
                return setConnection(sql, toObjectValue);

              case 4:
                _createdProgram = _context4.sent;
                response = {
                  insertId: _createdProgram.insertId,
                  joinTable: function () {
                    var _joinTable = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(table, data) {
                      var _mapObjectKey3, toPlaceholder, toObjectValue, sql, _createdJoinedTable;

                      return _regenerator["default"].wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _mapObjectKey3 = mapObjectKey(data), toPlaceholder = _mapObjectKey3.toPlaceholder, toObjectValue = _mapObjectKey3.toObjectValue;
                              sql = "INSERT INTO ".concat(table, " SET ").concat(toPlaceholder);
                              _context3.next = 4;
                              return setConnection(sql, toObjectValue);

                            case 4:
                              _createdJoinedTable = _context3.sent;
                              return _context3.abrupt("return", {
                                insertId: _createdJoinedTable.insertId
                              });

                            case 6:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    function joinTable(_x5, _x6) {
                      return _joinTable.apply(this, arguments);
                    }

                    return joinTable;
                  }()
                };
                return _context4.abrupt("return", response);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function insert(_x3, _x4) {
        return _insert.apply(this, arguments);
      }

      return insert;
    }()
    /**
     * @param - @Object identifer
     * @param - @Object data
     * @returns - @Object
     */

  }, {
    key: "updateOne",
    value: function () {
      var _updateOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(identifier, data) {
        var id, table, _mapObjectKey4, toPlaceholder, toObjectValue, sql, response;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = identifier.id, table = identifier.table;
                _mapObjectKey4 = mapObjectKey(data), toPlaceholder = _mapObjectKey4.toPlaceholder, toObjectValue = _mapObjectKey4.toObjectValue;
                sql = "UPDATE ".concat(table, " SET ").concat(toPlaceholder, " WHERE id = ").concat(id);
                _context5.next = 5;
                return setConnection(sql, toObjectValue);

              case 5:
                response = _context5.sent;
                return _context5.abrupt("return", response);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function updateOne(_x7, _x8) {
        return _updateOne.apply(this, arguments);
      }

      return updateOne;
    }()
    /**
     * @param - @Object identifer
     * @returns - @Object
     */

  }, {
    key: "deleteOne",
    value: function () {
      var _deleteOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(identifer) {
        var id, table, sql, response;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                id = identifer.id, table = identifer.table;
                sql = "DELETE FROM ".concat(table, " WHERE id = ").concat(id);
                _context6.next = 4;
                return setConnection(sql);

              case 4:
                response = _context6.sent;
                return _context6.abrupt("return", response);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function deleteOne(_x9) {
        return _deleteOne.apply(this, arguments);
      }

      return deleteOne;
    }()
  }]);
  return Program;
}();

module.exports = {
  Program: Program
};