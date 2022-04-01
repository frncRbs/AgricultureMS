"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _require = require("../../../server"),
    sendResponse = _require.sendResponse,
    setConnection = _require.setConnection;

var FarmerService = require("./farmer.service");

var FarmerController = /*#__PURE__*/function () {
  function FarmerController() {
    _classCallCheck(this, FarmerController);
  }

  _createClass(FarmerController, [{
    key: "requestService",
    value:
    /* Request Service */
    function () {
      var _requestService = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var service, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
      var _requestCrop = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var crop, response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
      var _viewRequestHistory = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
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