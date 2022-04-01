"use strict";

var _require = require("../../../constants/methods"),
    POST = _require.POST,
    GET = _require.GET;

var _require2 = require("../../../middlewares/middleware.protect-route.js"),
    authenticate = _require2.authenticate,
    verifyPersonnel = _require2.verifyPersonnel;

var validateFieldsFor = require("../../../middlewares/middleware.validator");

var _require3 = require("./personnel.controller"),
    createFarmerAccount = _require3.createFarmerAccount;

var rolePath = '/personnel';
var adminRoutes = [{
  path: "".concat(rolePath, "/create_farmer"),
  method: POST,
  controller: createFarmerAccount,
  localMiddlewares: [authenticate, verifyPersonnel, validateFieldsFor('createFarmer')]
}];
module.exports = adminRoutes;