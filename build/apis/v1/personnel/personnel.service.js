"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _require = require("../models/model.user"),
    User = _require.User;

var _require2 = require("../../../helpers/utils/util.password"),
    hashPassword = _require2.hashPassword;

var _require3 = require("../../../constants/envs"),
    FARMER_ROLE = _require3.FARMER_ROLE;

var PersonnelService = /*#__PURE__*/function () {
  function PersonnelService() {
    (0, _classCallCheck2["default"])(this, PersonnelService);
  }

  (0, _createClass2["default"])(PersonnelService, [{
    key: "createFarmerAccount",
    value:
    /* Create Farmer */
    function () {
      var _createFarmerAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(user) {
        var username, mobileNumber, password, isAlreadyRegistered, isMobileAlreadyExist, newUser;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
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
                    var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
                      var _yield$User$create, insertId;

                      return _regenerator["default"].wrap(function _callee$(_context) {
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
      var _listFarmers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(role) {
        var response;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
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