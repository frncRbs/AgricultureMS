"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _require = require("../../../server"),
    setConnection = _require.setConnection;

var mapObjectKey = require("../../../helpers/utils/util.map.object-key");

var Program = /*#__PURE__*/function () {
  function Program() {
    _classCallCheck(this, Program);
  }
  /**
   * @param - Object {identifier}
   * @returns - Array [data]
   */


  _createClass(Program, null, [{
    key: "findOne",
    value: function () {
      var _findOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(identifier) {
        var _mapObjectKey, toPlaceholder, toObjectValue, sql, response;

        return regeneratorRuntime.wrap(function _callee$(_context) {
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
      var _findAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(table) {
        var sql, response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
      var _insert = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(table, data) {
        var _mapObjectKey2, toPlaceholder, toObjectValue, sql, _createdProgram, response;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
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
                    var _joinTable = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(table, data) {
                      var _mapObjectKey3, toPlaceholder, toObjectValue, sql, _createdJoinedTable;

                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
      var _updateOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(identifier, data) {
        var id, table, _mapObjectKey4, toPlaceholder, toObjectValue, sql, response;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
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
      var _deleteOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(identifer) {
        var id, table, sql, response;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
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