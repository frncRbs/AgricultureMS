"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _require = require("../../../server"),
    sendResponse = _require.sendResponse,
    setConnection = _require.setConnection;

var FarmerService = require("./farmer.service");

var FarmerController = /*#__PURE__*/function () {
  function FarmerController() {
    (0, _classCallCheck2["default"])(this, FarmerController);
  }

  (0, _createClass2["default"])(FarmerController, [{
    key: "requestService",
    value:
    /* Request Service */
    function () {
      var _requestService = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var service, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                service = req.body.service;
                _context.next = 3;
                return FarmerService.requestService(service);

              case 3:
                response = _context.sent;
                console.log({
                  response: response
                });
                return _context.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 201,
                  isSuccess: true,
                  message: "Your request for service was successfully sent to the Administrator!"
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function requestService(_x, _x2) {
        return _requestService.apply(this, arguments);
      }

      return requestService;
    }()
    /* Request Props */

  }, {
    key: "requestCrop",
    value: function () {
      var _requestCrop = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var crop, response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                crop = req.body.crop;
                _context2.next = 3;
                return FarmerService.requestCrop(crop);

              case 3:
                response = _context2.sent;
                console.log({
                  response: response
                });
                return _context2.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 201,
                  isSuccess: true,
                  message: "Your request for crops was successfully sent to the Administrator!"
                }));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function requestCrop(_x3, _x4) {
        return _requestCrop.apply(this, arguments);
      }

      return requestCrop;
    }()
    /* Request History */

  }, {
    key: "viewRequestHistory",
    value: function () {
      var _viewRequestHistory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var response;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return FarmerService.viewRequestHistory();

              case 2:
                response = _context3.sent;
                console.log({
                  response: response
                });
                return _context3.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 200,
                  isSuccess: true,
                  message: "You are viewing your request history",
                  data: response
                }));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function viewRequestHistory(_x5, _x6) {
        return _viewRequestHistory.apply(this, arguments);
      }

      return viewRequestHistory;
    }()
  }]);
  return FarmerController;
}();

module.exports = FarmerController;