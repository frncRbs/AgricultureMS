"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _require = require("../models/model.user"),
    User = _require.User;

var _require2 = require("../../../helpers/utils/util.password"),
    hashPassword = _require2.hashPassword;

var _require3 = require("../../../constants/envs"),
    FARMER_ROLE = _require3.FARMER_ROLE;

var PersonnelService = /*#__PURE__*/function () {
  function PersonnelService() {
    _classCallCheck(this, PersonnelService);
  }

  _createClass(PersonnelService, [{
    key: "createFarmerAccount",
    value:
    /* Create Farmer */
    function () {
      var _createFarmerAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(user) {
        var username, mobileNumber, password, isAlreadyRegistered, isMobileAlreadyExist, newUser;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                username = user.username, mobileNumber = user.mobileNumber, password = user.password;
                _context2.next = 3;
                return User.findOne({
                  username: username
                });

              case 3:
                isAlreadyRegistered = _context2.sent;
                _context2.next = 6;
                return User.findOne({
                  mobileNumber: mobileNumber
                });

              case 6:
                isMobileAlreadyExist = _context2.sent;
                newUser = _objectSpread(_objectSpread({}, user), {}, {
                  role: FARMER_ROLE,
                  password: hashPassword(password)
                });
                return _context2.abrupt("return", {
                  isAlreadyRegistered: isAlreadyRegistered,
                  isMobileAlreadyExist: isMobileAlreadyExist,
                  create: function () {
                    var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                      var _yield$User$create, insertId;

                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return User.create(newUser);

                            case 2:
                              _yield$User$create = _context.sent;
                              insertId = _yield$User$create.insertId;
                              _context.next = 6;
                              return Role.create({
                                id: insertId,
                                role: FARMER_ROLE
                              });

                            case 6:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    function create() {
                      return _create.apply(this, arguments);
                    }

                    return create;
                  }()
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createFarmerAccount(_x) {
        return _createFarmerAccount.apply(this, arguments);
      }

      return createFarmerAccount;
    }()
    /* List of Farmers   */

  }, {
    key: "listFarmers",
    value: function () {
      var _listFarmers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(role) {
        var response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return User.findAll(role);

              case 2:
                response = _context3.sent;
                return _context3.abrupt("return", response);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function listFarmers(_x2) {
        return _listFarmers.apply(this, arguments);
      }

      return listFarmers;
    }()
  }]);

  return PersonnelService;
}();

var personnelService = new PersonnelService();
module.exports = personnelService;