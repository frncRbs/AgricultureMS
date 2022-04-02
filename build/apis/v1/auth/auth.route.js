"use strict";

var _require = require("../../../constants/methods"),
    POST = _require.POST,
    GET = _require.GET,
    DELETE = _require.DELETE;

var _require2 = require("../../../middlewares/middleware.protect-route.js"),
    authenticate = _require2.authenticate;

var validateFieldsFor = require("../../../middlewares/middleware.validator");

var _require3 = require("./auth.controller"),
    login = _require3.login,
    register = _require3.register,
    logout = _require3.logout,
    changePassword = _require3.changePassword;

var authRoutes = [{
  path: '/login',
  method: POST,
  controller: login,
  localMiddlewares: [validateFieldsFor('login')]
}, {
  path: '/register',
  method: POST,
  controller: register,
  localMiddlewares: [validateFieldsFor('register')]
}, {
  path: '/logout',
  method: DELETE,
  controller: logout,
  localMiddlewares: []
}, {
  path: '/change_password',
  method: POST,
  controller: changePassword,
  localMiddlewares: [authenticate, validateFieldsFor('changePassword')]
}, {
  path: '/test',
  method: GET,
  controller: function controller(req, res) {
    res.json({
      status: 'success'
    });
  },
  localMiddlewares: []
}];
module.exports = authRoutes;