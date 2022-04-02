"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _require = require("../../../server"),
    sendResponse = _require.sendResponse,
    setConnection = _require.setConnection;

var personnelService = require("./personnel.service");

var PersonnelController = /*#__PURE__*/function () {
  function PersonnelController() {
    (0, _classCallCheck2["default"])(this, PersonnelController);
  }

  (0, _createClass2["default"])(PersonnelController, [{
    key: "createFarmerAccount",
    value:
    /* Create Farmer */
    function () {
      var _createFarmerAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var user, _yield$adminService$c, isAlreadyRegistered, isMobileAlreadyExist, create;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = req.body;
                _context.next = 3;
                return adminService.createPersonnel(_objectSpread({}, user));

              case 3:
                _yield$adminService$c = _context.sent;
                isAlreadyRegistered = _yield$adminService$c.isAlreadyRegistered;
                isMobileAlreadyExist = _yield$adminService$c.isMobileAlreadyExist;
                create = _yield$adminService$c.create;

                if (!isAlreadyRegistered) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 400,
                  isSuccess: false,
                  message: 'This username is already exist.'
                }));

              case 9:
                if (!isMobileAlreadyExist) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 400,
                  isSuccess: false,
                  message: 'This mobile number is already taken.'
                }));

              case 11:
                _context.next = 13;
                return create();

              case 13:
                return _context.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 201,
                  isSuccess: true,
                  message: "Farmer's account successfully created!"
                }));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createFarmerAccount(_x, _x2) {
        return _createFarmerAccount.apply(this, arguments);
      }

      return createFarmerAccount;
    }()
    /* List of Farmers  */

  }, {
    key: "listFarmers",
    value: function () {
      var _listFarmers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return personnelService.listFarmers();

              case 2:
                response = _context2.sent;
                console.log({
                  role: role,
                  response: response
                });
                return _context2.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 201,
                  isSuccess: true,
                  message: "Farmers Successfullly Retrieved!",
                  data: response
                }));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function listFarmers(_x3, _x4) {
        return _listFarmers.apply(this, arguments);
      }

      return listFarmers;
    }()
  }]);
  return PersonnelController;
}();

module.exports = PersonnelController;