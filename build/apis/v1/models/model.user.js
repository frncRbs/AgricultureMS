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
 * This is just a custom schema of an object.
 * This schema supports by the function in helpes/utils/util.filter-truthy-object
 */


var UserSchema = {
  firstname: '',
  middlename: '',
  lastname: '',
  mobileNumber: '',
  username: '',
  password: '',
  isActivated: '',
  birthDate: '',
  placeOfBirth: '',

  /* Based on role */
  provincial: '',
  barangay: '',
  municipality: ''
};

var UserMethods = /*#__PURE__*/function () {
  function UserMethods() {
    (0, _classCallCheck2["default"])(this, UserMethods);
  }
  /**
   * @param - Object {identifier}
   * @returns - Object
   */


  (0, _createClass2["default"])(UserMethods, null, [{
    key: "findOne",
    value: function () {
      var _findOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(identifier) {
        var _mapObjectKey, toPlaceholder, toObjectValue, sql, user;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _mapObjectKey = mapObjectKey(identifier), toPlaceholder = _mapObjectKey.toPlaceholder, toObjectValue = _mapObjectKey.toObjectValue;
                sql = "SELECT * FROM users WHERE ".concat(toPlaceholder, " LIMIT 1");
                console.log({
                  sql: sql
                });
                _context.next = 5;
                return setConnection(sql, toObjectValue);

              case 5:
                user = _context.sent;
                return _context.abrupt("return", user);

              case 7:
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
     * @returns - Array
     */

  }, {
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(identifier) {
        var _mapObjectKey2, toPlaceholder, toObjectValue, sql, response;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _mapObjectKey2 = mapObjectKey(identifier), toPlaceholder = _mapObjectKey2.toPlaceholder, toObjectValue = _mapObjectKey2.toObjectValue;
                sql = "SELECT * FROM Users WHERE ".concat(toPlaceholder, " ");
                console.log({
                  sql: sql
                });
                _context2.next = 5;
                return setConnection(sql, toObjectValue);

              case 5:
                response = _context2.sent;
                return _context2.abrupt("return", response);

              case 7:
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
     * @returns - Object
     */

  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(data) {
        var _mapObjectKey3, toPlaceholder, toObjectValue, sql, response, user;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _mapObjectKey3 = mapObjectKey(data), toPlaceholder = _mapObjectKey3.toPlaceholder, toObjectValue = _mapObjectKey3.toObjectValue;
                sql = "INSERT IGNORE INTO users SET ".concat(toPlaceholder);
                _context4.next = 4;
                return setConnection(sql, toObjectValue);

              case 4:
                response = _context4.sent;
                console.log({
                  createdUser: response
                });
                /**
                 * @param - String table
                 * @param - Object {data}
                 * @returns - Object
                 */

                user = {
                  insertId: response.insertId,
                  joinTable: function () {
                    var _joinTable = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(table, data) {
                      var _mapObjectKey4, toPlaceholder, toObjectValue, sql;

                      return _regenerator["default"].wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _mapObjectKey4 = mapObjectKey(data), toPlaceholder = _mapObjectKey4.toPlaceholder, toObjectValue = _mapObjectKey4.toObjectValue;
                              sql = "INSERT IGNORE INTO ".concat(table, " SET ").concat(toPlaceholder);
                              _context3.next = 4;
                              return setConnection(sql, toObjectValue);

                            case 4:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    function joinTable(_x4, _x5) {
                      return _joinTable.apply(this, arguments);
                    }

                    return joinTable;
                  }()
                };
                return _context4.abrupt("return", user);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function create(_x3) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
    /**
     * @paramOne - Object {identifier}
     * @paramTwo - Object {dataToUpdate}
     * @returns - Array
     */

  }, {
    key: "updateOne",
    value: function () {
      var _updateOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(identifier, data) {
        var mappedIdentifier, mappedData, sql, response;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                mappedIdentifier = mapObjectKey(identifier);
                mappedData = mapObjectKey(data);
                sql = "UPDATE users SET ".concat(mappedData.toPlaceholder, " WHERE ").concat(mappedIdentifier.toObjectKey, " = '").concat(mappedIdentifier.toObjectValue[0], "'");
                console.log({
                  sql: sql
                });
                _context5.next = 6;
                return setConnection(sql, mappedData.toObjectValue);

              case 6:
                response = _context5.sent;
                return _context5.abrupt("return", response);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function updateOne(_x6, _x7) {
        return _updateOne.apply(this, arguments);
      }

      return updateOne;
    }()
    /**
     * @paramOne - Object {identifier}
     * @paramTwo - Object {dataToUpdate}
     * @returns - Array
     */

  }, {
    key: "deleteOne",
    value: function () {
      var _deleteOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(identifier) {
        var mappedIdentifier, sql, response;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                mappedIdentifier = mapObjectKey(identifier);
                sql = "DELETE FROM users WHERE ".concat(mappedIdentifier.toObjectKey, " = '").concat(mappedIdentifier.toObjectValue[0], "'");
                console.log({
                  sql: sql
                });
                _context6.next = 5;
                return setConnection(sql, null);

              case 5:
                response = _context6.sent;
                return _context6.abrupt("return", response);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function deleteOne(_x8) {
        return _deleteOne.apply(this, arguments);
      }

      return deleteOne;
    }()
    /**
     * @returns - Object
     */

  }, {
    key: "deleteAll",
    value: function () {
      var _deleteAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var sql, response;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                sql = "DELETE FROM users";
                console.log({
                  sql: sql
                });
                _context7.next = 4;
                return setConnection(sql, null);

              case 4:
                response = _context7.sent;
                return _context7.abrupt("return", response);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function deleteAll() {
        return _deleteAll.apply(this, arguments);
      }

      return deleteAll;
    }()
  }]);
  return UserMethods;
}();

module.exports = {
  UserSchema: UserSchema,
  User: UserMethods
};