"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _require = require("../../../server"),
    setConnection = _require.setConnection;

var mapObjectKey = require("../../../helpers/utils/util.map.object-key");

var Role = /*#__PURE__*/function () {
  function Role() {
    _classCallCheck(this, Role);
  }
  /**
   * @param - Object {identifier}
   * @returns - Object
   */


  _createClass(Role, null, [{
    key: "findOne",
    value: function () {
      var _findOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(identifier) {
        var _mapObjectKey, toPlaceholder, toObjectValue, sql, response;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _mapObjectKey = mapObjectKey(identifier), toPlaceholder = _mapObjectKey.toPlaceholder, toObjectValue = _mapObjectKey.toObjectValue;
                sql = "SELECT role FROM Roles WHERE ".concat(toPlaceholder, " LIMIT 1");
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

      function findOne(_x) {
        return _findOne.apply(this, arguments);
      }

      return findOne;
    }()
    /**
     * @param - Object {identifier}
     * @returns - Object
     */

  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var _mapObjectKey2, toPlaceholder, toObjectValue, sql, response;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _mapObjectKey2 = mapObjectKey(data), toPlaceholder = _mapObjectKey2.toPlaceholder, toObjectValue = _mapObjectKey2.toObjectValue;
                sql = "INSERT INTO Roles SET ".concat(toPlaceholder);
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

      function create(_x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);

  return Role;
}();

module.exports = {
  Role: Role
};