"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _require = require("../../../server"),
    sendResponse = _require.sendResponse,
    setConnection = _require.setConnection;

var personnelService = require("./personnel.service");

var PersonnelController = /*#__PURE__*/function () {
  function PersonnelController() {
    _classCallCheck(this, PersonnelController);
  }

  _createClass(PersonnelController, [{
    key: "createFarmerAccount",
    value:
    /* Create Farmer */
    function () {
      var _createFarmerAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var user, _yield$adminService$c, isAlreadyRegistered, isMobileAlreadyExist, create;

        return regeneratorRuntime.wrap(function _callee$(_context) {
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
      var _listFarmers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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