"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var adminService = require("./admin.service");

var _require = require("../../../server"),
    sendResponse = _require.sendResponse;

var _require2 = require("../../../helpers/utils/util.truthy-object"),
    filterTruthyObject = _require2.filterTruthyObject;

var AdminController = /*#__PURE__*/function () {
  function AdminController() {
    _classCallCheck(this, AdminController);
  }

  _createClass(AdminController, [{
    key: "createPersonnelAccount",
    value:
    /**
     * @func createPersonnelAccount
     * @desc Controller for creating new personnel/coordinator
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */
    function () {
      var _createPersonnelAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var user, _yield$adminService$c, isAlreadyRegistered, isMobileAlreadyExist, create;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = req.body;
                _context.next = 3;
                return adminService.createPersonnelAccount(user);

              case 3:
                _yield$adminService$c = _context.sent;
                isAlreadyRegistered = _yield$adminService$c.isAlreadyRegistered;
                isMobileAlreadyExist = _yield$adminService$c.isMobileAlreadyExist;
                create = _yield$adminService$c.create;

                if (!isAlreadyRegistered.length) {
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
                if (!isMobileAlreadyExist.length) {
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
                  message: "Personnel's account successfully created!"
                }));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createPersonnelAccount(_x, _x2) {
        return _createPersonnelAccount.apply(this, arguments);
      }

      return createPersonnelAccount;
    }()
    /**
     * @func deactiveAccount
     * @desc Controller for deactivating users account
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */

  }, {
    key: "deactiveAccount",
    value: function () {
      var _deactiveAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var id, _yield$adminService$d, save, isUserExist;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = req.body.id;

                if (id) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 400,
                  isSuccess: false,
                  message: "Undefined user."
                }));

              case 3:
                _context2.next = 5;
                return adminService.deactiveAccount(id);

              case 5:
                _yield$adminService$d = _context2.sent;
                save = _yield$adminService$d.save;
                isUserExist = _yield$adminService$d.isUserExist;

                if (isUserExist) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 400,
                  isSuccess: false,
                  message: "There is no user with this id ".concat(id)
                }));

              case 10:
                _context2.next = 12;
                return save();

              case 12:
                return _context2.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 201,
                  isSuccess: true,
                  message: "This account was successfully Deactivated!"
                }));

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function deactiveAccount(_x3, _x4) {
        return _deactiveAccount.apply(this, arguments);
      }

      return deactiveAccount;
    }()
    /**
     * @func activateAccount
     * @desc Controller for activating users account
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */

  }, {
    key: "activateAccount",
    value: function () {
      var _activateAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var id, _yield$adminService$a, save, isUserExist;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.body.id;
                _context3.next = 3;
                return adminService.activateAccount(id);

              case 3:
                _yield$adminService$a = _context3.sent;
                save = _yield$adminService$a.save;
                isUserExist = _yield$adminService$a.isUserExist;

                if (isUserExist) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 400,
                  isSuccess: false,
                  message: "There is no user with this id ".concat(id)
                }));

              case 8:
                _context3.next = 10;
                return save();

              case 10:
                return _context3.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 201,
                  isSuccess: true,
                  message: "This account was successfully Activated!"
                }));

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function activateAccount(_x5, _x6) {
        return _activateAccount.apply(this, arguments);
      }

      return activateAccount;
    }()
    /**
     * @func changeRole
     * @desc Controller for updating personnels/coordinators role
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */

  }, {
    key: "changeRole",
    value: function () {
      var _changeRole = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var _req$body, id, role, _yield$adminService$c2, save, isUserExist;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _req$body = req.body, id = _req$body.id, role = _req$body.role;
                _context4.next = 3;
                return adminService.changeRole(id, role);

              case 3:
                _yield$adminService$c2 = _context4.sent;
                save = _yield$adminService$c2.save;
                isUserExist = _yield$adminService$c2.isUserExist;

                if (isUserExist) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 400,
                  isSuccess: true,
                  message: "There is no user with this id ".concat(id)
                }));

              case 8:
                _context4.next = 10;
                return save();

              case 10:
                return _context4.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 201,
                  isSuccess: true,
                  message: "The role of this user has been successfuly updated!"
                }));

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function changeRole(_x7, _x8) {
        return _changeRole.apply(this, arguments);
      }

      return changeRole;
    }()
    /**
     * @func createNewProgram
     * @desc Controller for creating new program (services, crops)
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */

  }, {
    key: "createNewProgram",
    value: function () {
      var _createNewProgram = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var _req$body2, type, id, program, identifier, response;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _req$body2 = req.body, type = _req$body2.type, id = _req$body2.id, program = _req$body2.program;
                identifier = {
                  table: type,
                  adminId: id
                };
                _context5.next = 4;
                return adminService.createNewProgram(identifier, program);

              case 4:
                response = _context5.sent;
                return _context5.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 201,
                  isSuccess: true,
                  message: "New program successfully created!",
                  data: response
                }));

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function createNewProgram(_x9, _x10) {
        return _createNewProgram.apply(this, arguments);
      }

      return createNewProgram;
    }()
    /**
     * @func updateProgram
     * @desc Controller for updating single program(service, crop)
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */

  }, {
    key: "updateProgram",
    value: function () {
      var _updateProgram = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        var _req$body3, identifier, program, response;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _req$body3 = req.body, identifier = _req$body3.identifier, program = _req$body3.program;
                _context6.next = 3;
                return adminService.updateProgram({
                  table: identifier['type'],
                  id: identifier['id']
                }, {
                  name: program
                });

              case 3:
                response = _context6.sent;
                return _context6.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 200,
                  isSuccess: true,
                  message: "".concat(program, " successfully updated!"),
                  data: response
                }));

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function updateProgram(_x11, _x12) {
        return _updateProgram.apply(this, arguments);
      }

      return updateProgram;
    }()
    /**
     * @func deleteProgram
     * @desc Controller for updating single program(service, crop)
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */

  }, {
    key: "deleteProgram",
    value: function () {
      var _deleteProgram = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
        var identifier, response;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                identifier = req.body;
                _context7.next = 3;
                return adminService.deleteProgram({
                  table: identifier['type'],
                  id: identifier['id']
                });

              case 3:
                response = _context7.sent;
                return _context7.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 200,
                  isSuccess: true,
                  message: "Deleted Successfully!",
                  data: response
                }));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function deleteProgram(_x13, _x14) {
        return _deleteProgram.apply(this, arguments);
      }

      return deleteProgram;
    }()
    /**
     * @func listUsers
     * @desc Controller for getting all users based on role
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */

  }, {
    key: "listUsers",
    value: function () {
      var _listUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
        var role, response;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                role = req.body.role;
                _context8.next = 3;
                return adminService.listUsers({
                  role: role
                });

              case 3:
                response = _context8.sent;
                return _context8.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 201,
                  isSuccess: true,
                  message: "Farmers Successfullly Retrieved!",
                  data: response
                }));

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function listUsers(_x15, _x16) {
        return _listUsers.apply(this, arguments);
      }

      return listUsers;
    }()
    /**
     * @func listPrograms
     * @desc Controller for getting all programs
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */

  }, {
    key: "listPrograms",
    value: function () {
      var _listPrograms = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
        var type, response;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                type = req.body.type;
                _context9.next = 3;
                return adminService.listPrograms(type);

              case 3:
                response = _context9.sent;
                return _context9.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 200,
                  isSuccess: true,
                  message: "Programs Successfullly Retrieved!",
                  data: response
                }));

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function listPrograms(_x17, _x18) {
        return _listPrograms.apply(this, arguments);
      }

      return listPrograms;
    }()
    /**
     * @func getNotifications
     * @desc Controller for getting notifications
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     */

  }, {
    key: "getNotifications",
    value: function () {
      var _getNotifications = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
        var response;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return adminService.getNotifications();

              case 2:
                response = _context10.sent;
                return _context10.abrupt("return", sendResponse({
                  res: res,
                  statusCode: 201,
                  isSuccess: true,
                  message: "Farmers Successfullly Retrieved!",
                  data: response
                }));

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function getNotifications(_x19, _x20) {
        return _getNotifications.apply(this, arguments);
      }

      return getNotifications;
    }()
  }]);

  return AdminController;
}();

module.exports = new AdminController();