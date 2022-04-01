"use strict";

var _require = require("../../../constants/methods"),
    POST = _require.POST,
    GET = _require.GET;

var _require2 = require("../../../middlewares/middleware.protect-route.js"),
    authenticate = _require2.authenticate,
    verifyAdmin = _require2.verifyAdmin;

var validateFieldsFor = require("../../../middlewares/middleware.validator");

var _require3 = require("./admin.controller"),
    createPersonnelAccount = _require3.createPersonnelAccount,
    deactiveAccount = _require3.deactiveAccount,
    activateAccount = _require3.activateAccount,
    changeRole = _require3.changeRole,
    createNewProgram = _require3.createNewProgram,
    listPrograms = _require3.listPrograms,
    listUsers = _require3.listUsers,
    updateProgram = _require3.updateProgram,
    deleteProgram = _require3.deleteProgram;

var rolePath = '/admin';
var adminRoutes = [{
  path: "".concat(rolePath, "/create_personnel"),
  method: POST,
  controller: createPersonnelAccount,
  localMiddlewares: [authenticate, verifyAdmin // validateFieldsFor('createPersonnel'),
  ]
}, {
  path: "".concat(rolePath, "/deactive_account"),
  method: POST,
  controller: deactiveAccount,
  localMiddlewares: [authenticate, verifyAdmin]
}, {
  path: "".concat(rolePath, "/activate_account"),
  method: POST,
  controller: activateAccount,
  localMiddlewares: [authenticate, verifyAdmin]
}, {
  path: "".concat(rolePath, "/change_role"),
  method: POST,
  controller: changeRole,
  localMiddlewares: [authenticate, verifyAdmin]
}, {
  path: "".concat(rolePath, "/new_program"),
  method: POST,
  controller: createNewProgram,
  localMiddlewares: [authenticate, verifyAdmin]
}, {
  path: "".concat(rolePath, "/list_programs"),
  method: POST,
  controller: listPrograms,
  localMiddlewares: [authenticate, verifyAdmin]
}, {
  path: "".concat(rolePath, "/delete_program"),
  method: POST,
  controller: deleteProgram,
  localMiddlewares: [authenticate, verifyAdmin]
}, {
  path: "".concat(rolePath, "/update_program"),
  method: POST,
  controller: updateProgram,
  localMiddlewares: [authenticate, verifyAdmin]
}, {
  path: "".concat(rolePath, "/list_users"),
  method: POST,
  controller: listUsers,
  localMiddlewares: [authenticate, verifyAdmin]
}];
module.exports = adminRoutes;