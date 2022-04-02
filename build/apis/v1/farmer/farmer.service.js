"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _require = require("../models/model.user"),
    User = _require.User;

var _require2 = require("../models/model.program"),
    Program = _require2.Program;

var FarmerService = /*#__PURE__*/function () {
  function FarmerService() {
    (0, _classCallCheck2["default"])(this, FarmerService);
  }

  (0, _createClass2["default"])(FarmerService, null, [{
    key: "requestService",
    value:
    /* Request Service */
    function () {
      var _requestService = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(service) {
        var table, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                table = 'services';
                _context.next = 3;
                return Program.insert({
                  service: service
                }, table);

              case 3:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function requestService(_x) {
        return _requestService.apply(this, arguments);
      }

      return requestService;
    }()
    /* Request Props */

  }, {
    key: "requestCrop",
    value: function () {
      var _requestCrop = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(crop) {
        var table, response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                table = 'crops';
                _context2.next = 3;
                return Program.insert({
                  crop: crop
                }, table);

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

      function requestCrop(_x2) {
        return _requestCrop.apply(this, arguments);
      }

      return requestCrop;
    }()
    /* Request History */

  }, {
    key: "viewRequestHistory",
    value: function () {
      var _viewRequestHistory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var table, response;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                table = 'RequestHistory';
                _context3.next = 3;
                return Program.findAll(table);

              case 3:
                response = _context3.sent;
                return _context3.abrupt("return", response);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function viewRequestHistory(_x3, _x4) {
        return _viewRequestHistory.apply(this, arguments);
      }

      return viewRequestHistory;
    }()
  }]);
  return FarmerService;
}();

module.exports = FarmerService;