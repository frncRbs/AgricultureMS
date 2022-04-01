"use strict";

var _require = require("../../../constants/methods"),
    POST = _require.POST,
    GET = _require.GET;

var _require2 = require("../../../middlewares/middleware.protect-route.js"),
    authenticate = _require2.authenticate,
    verifyFarmer = _require2.verifyFarmer;

var validateFieldsFor = require("../../../middlewares/middleware.validator");

var _require3 = require("./farmer.controller"),
    requestService = _require3.requestService,
    requestCrop = _require3.requestCrop,
    viewRequestHistory = _require3.viewRequestHistory;

var rolePath = '/farmer';
var adminRoutes = [{
  path: "".concat(rolePath, "/request_service"),
  method: POST,
  controller: requestService,
  localMiddlewares: [authenticate, verifyFarmer]
}, {
  path: "".concat(rolePath, "/request_crop"),
  method: POST,
  controller: requestCrop,
  localMiddlewares: [authenticate, verifyFarmer]
}, {
  path: "".concat(rolePath, "/request_history"),
  method: GET,
  controller: viewRequestHistory,
  localMiddlewares: [authenticate, verifyFarmer]
}];
module.exports = adminRoutes;