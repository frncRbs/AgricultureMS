"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
    (0, _classCallCheck2["default"])(this, Controller);
    (0, _defineProperty2["default"])(this, "router", Router());
    (0, _defineProperty2["default"])(this, "routes", [].concat((0, _toConsumableArray2["default"])(authRoutes), (0, _toConsumableArray2["default"])(adminRoutes)));
    (0, _defineProperty2["default"])(this, "path", NODE_ENV === 'production' ? '*' : '/');
  }

  (0, _createClass2["default"])(Controller, [{
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