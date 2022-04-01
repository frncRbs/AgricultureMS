"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('express'),
    Router = _require.Router;

var path = require('path');

var asyncHandler = require("../../middlewares/middleware.async-handler");

var _require2 = require("../../constants/methods"),
    POST = _require2.POST,
    GET = _require2.GET,
    DELETE = _require2.DELETE,
    PUT = _require2.PUT;

var _require3 = require("../../constants/envs"),
    NODE_ENV = _require3.NODE_ENV;

var authRoutes = require("./auth/auth.route");

var adminRoutes = require("./admin/admin.route");

var clientBuildRoute = {
  path: "/",
  method: GET,
  controller: function controller(req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  },
  localMiddlewares: []
};

var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);

    _defineProperty(this, "router", Router());

    _defineProperty(this, "routes", [].concat(_toConsumableArray(authRoutes), _toConsumableArray(adminRoutes), [clientBuildRoute]));

    _defineProperty(this, "path", NODE_ENV === 'production' ? '*' : '/');
  }

  _createClass(Controller, [{
    key: "setRoutes",
    value: function setRoutes() {
      var _this = this;

      this.routes.forEach(function (route) {
        /* Set local middlewares */
        route.localMiddlewares.forEach(function (localMiddleware) {
          _this.router.use(route.path, localMiddleware);
        });

        switch (route.method) {
          case POST:
            _this.router.post(route.path, asyncHandler(route.controller));

            break;

          case GET:
            _this.router.get(route.path, asyncHandler(route.controller));

            break;

          case DELETE:
            _this.router["delete"](route.path, asyncHandler(route.controller));

            break;

          case PUT:
            _this.router.patch(route.path, asyncHandler(route.controller));

            break;

          default:
            break;
        }
      });
      return this.router;
    }
  }]);

  return Controller;
}();

var controller = new Controller();
module.exports = controller;