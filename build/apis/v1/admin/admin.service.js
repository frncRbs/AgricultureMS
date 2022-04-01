"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _require = require("../models/model.user"),
    UserSchema = _require.UserSchema,
    User = _require.User;

var _require2 = require("../models/model.role"),
    Role = _require2.Role;

var _require3 = require("../models/model.program"),
    Program = _require3.Program;

var _require4 = require("../../../helpers/utils/util.password"),
    hashPassword = _require4.hashPassword;

var _require5 = require("../../../helpers/utils/util.truthy-object"),
    filterTruthyObject = _require5.filterTruthyObject;

var _require6 = require("../../../constants/envs"),
    PERSONNEL_ROLE = _require6.PERSONNEL_ROLE;

var _require7 = require("../../../helpers/utils/util.date"),
    getDate = _require7.getDate;

var AdminService = /*#__PURE__*/function () {
  function AdminService() {
    _classCallCheck(this, AdminService);
  }

  _createClass(AdminService, [{
    key: "createPersonnelAccount",
    value:
    /**
     * @func createPersonnelAccount
     * @desc Service for creating new personnel/coordinator
     * @param {Oject} user
     * @returns {Object}
     */
    function () {
      var _createPersonnelAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(user) {
        var username, mobileNumber, password, isAlreadyRegistered, isMobileAlreadyExist, newUser;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                username = user.username, mobileNumber = user.mobileNumber, password = user.password;
                _context2.next = 3;
                return User.findOne({
                  username: username
                });

              case 3:
                isAlreadyRegistered = _context2.sent;
                _context2.next = 6;
                return User.findOne({
                  mobileNumber: mobileNumber
                });

              case 6:
                isMobileAlreadyExist = _context2.sent;
                newUser = filterTruthyObject({}, _objectSpread(_objectSpread({}, user), {}, {
                  role: PERSONNEL_ROLE,
                  password: hashPassword(password),
                  createdAt: getDate(),
                  position: null,
                  // removes positon
                  confirmPassword: null,
                  provincial: null,
                  barangay: null,
                  municipality: null
                }));
                return _context2.abrupt("return", {
                  isAlreadyRegistered: isAlreadyRegistered,
                  isMobileAlreadyExist: isMobileAlreadyExist,
                  create: function () {
                    var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                      var _createdUser;

                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return User.create(newUser);

                            case 2:
                              _createdUser = _context.sent;
                              _context.next = 5;
                              return _createdUser.joinTable('Personnels', {
                                id: _createdUser.insertId,
                                position: user.position
                              });

                            case 5:
                              _context.next = 7;
                              return _createdUser.joinTable('PersonnelsAddresses', {
                                personnelId: _createdUser.insertId,
                                provincial: user.provincial,
                                barangay: user.barangay,
                                municipality: user.municipality
                              });

                            case 7:
                              _context.next = 9;
                              return Role.create({
                                id: _createdUser.insertId,
                                role: PERSONNEL_ROLE
                              });

                            case 9:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    function create() {
                      return _create.apply(this, arguments);
                    }

                    return create;
                  }()
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createPersonnelAccount(_x) {
        return _createPersonnelAccount.apply(this, arguments);
      }

      return createPersonnelAccount;
    }()
    /**
     * @func deactiveAccount
     * @desc Service for deactivating users account
     * @param {String} id
     * @returns {Object}
     */

  }, {
    key: "deactiveAccount",
    value: function () {
      var _deactiveAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
        var isUserExist, userFromDb;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                isUserExist = false;
                _context4.next = 3;
                return User.findOne({
                  id: id
                });

              case 3:
                userFromDb = _context4.sent;

                if (Object.entries(userFromDb).length) {
                  isUserExist = true;
                }

                return _context4.abrupt("return", {
                  isUserExist: isUserExist,
                  save: function () {
                    var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.next = 2;
                              return User.updateOne({
                                id: id
                              }, {
                                isActivated: 0
                              });

                            case 2:
                              return _context3.abrupt("return", _context3.sent);

                            case 3:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    function save() {
                      return _save.apply(this, arguments);
                    }

                    return save;
                  }()
                });

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deactiveAccount(_x2) {
        return _deactiveAccount.apply(this, arguments);
      }

      return deactiveAccount;
    }()
    /**
     * @func activateAccount
     * @desc Service for activating users account
     * @param {String} id
     * @returns {Object}
     */

  }, {
    key: "activateAccount",
    value: function () {
      var _activateAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
        var isUserExist, userFromDb;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                isUserExist = false;
                _context6.next = 3;
                return User.findOne({
                  id: id
                });

              case 3:
                userFromDb = _context6.sent;

                if (Object.entries(userFromDb).length) {
                  isUserExist = true;
                }

                return _context6.abrupt("return", {
                  isUserExist: isUserExist,
                  save: function () {
                    var _save2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                      return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              _context5.next = 2;
                              return User.updateOne({
                                id: id
                              }, {
                                isActivated: 1
                              });

                            case 2:
                              return _context5.abrupt("return", _context5.sent);

                            case 3:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5);
                    }));

                    function save() {
                      return _save2.apply(this, arguments);
                    }

                    return save;
                  }()
                });

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function activateAccount(_x3) {
        return _activateAccount.apply(this, arguments);
      }

      return activateAccount;
    }()
    /**
     * @func changeRole
     * @desc Service for updating personnels/coordinators role
     * @param {String} id
     * @param {String} role
     * @returns {Object}
     */

  }, {
    key: "changeRole",
    value: function () {
      var _changeRole = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(id, role) {
        var isUserExist, userFromDb;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                isUserExist = false;
                _context8.next = 3;
                return User.findOne({
                  id: id
                });

              case 3:
                userFromDb = _context8.sent;

                if (Object.entries(userFromDb).length) {
                  isUserExist = true;
                }

                return _context8.abrupt("return", {
                  isUserExist: isUserExist,
                  save: function () {
                    var _save3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                      return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                          switch (_context7.prev = _context7.next) {
                            case 0:
                              _context7.next = 2;
                              return User.updateOne({
                                id: id
                              }, {
                                role: role
                              });

                            case 2:
                              return _context7.abrupt("return", _context7.sent);

                            case 3:
                            case "end":
                              return _context7.stop();
                          }
                        }
                      }, _callee7);
                    }));

                    function save() {
                      return _save3.apply(this, arguments);
                    }

                    return save;
                  }()
                });

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function changeRole(_x4, _x5) {
        return _changeRole.apply(this, arguments);
      }

      return changeRole;
    }()
    /**
     * @func createNewProgram
     * @desc Service for creating new program (services, crops)
     * @param {String} table
     * @param {Object} program
     * @returns {Object}
     */

  }, {
    key: "createNewProgram",
    value: function () {
      var _createNewProgram = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(identifier, program) {
        var adminId, table, _createdProgram, _createdNewTable;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                adminId = identifier.adminId, table = identifier.table;
                _context9.next = 3;
                return Program.insert(table, {
                  name: program
                });

              case 3:
                _createdProgram = _context9.sent;
                _context9.next = 6;
                return _createdProgram.joinTable('Programs', _defineProperty({}, "".concat(table.slice(0, -1), "Id"), _createdProgram.insertId));

              case 6:
                _createdNewTable = _context9.sent;
                return _context9.abrupt("return", _createdProgram);

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function createNewProgram(_x6, _x7) {
        return _createNewProgram.apply(this, arguments);
      }

      return createNewProgram;
    }()
    /**
     * @func listPrograms
     * @desc Service to list all programs based on program (services, crops)
     * @param {String} program
     * @returns {Array}
     */

  }, {
    key: "listPrograms",
    value: function () {
      var _listPrograms = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(program) {
        var _programs;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return Program.findAll(program);

              case 2:
                _programs = _context10.sent;
                return _context10.abrupt("return", _programs);

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function listPrograms(_x8) {
        return _listPrograms.apply(this, arguments);
      }

      return listPrograms;
    }()
    /**
     * @func updateProgram
     * @desc Service for updating single program(service, crop)
     * @param {String} table
     * @param {Object} data
     * @returns {Object}
     */

  }, {
    key: "updateProgram",
    value: function () {
      var _updateProgram = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(identifier, program) {
        var response;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return Program.updateOne(identifier, program);

              case 2:
                response = _context11.sent;
                return _context11.abrupt("return", response);

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function updateProgram(_x9, _x10) {
        return _updateProgram.apply(this, arguments);
      }

      return updateProgram;
    }()
    /**
     * @func deleteProgram
     * @desc Service for deleting single program(service, crop)
     * @param {Object} identifier
     * @returns {Object}
     */

  }, {
    key: "deleteProgram",
    value: function () {
      var _deleteProgram = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(identifer) {
        var response;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return Program.deleteOne(identifer);

              case 2:
                response = _context12.sent;
                return _context12.abrupt("return", response);

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function deleteProgram(_x11) {
        return _deleteProgram.apply(this, arguments);
      }

      return deleteProgram;
    }()
    /**
     * @func listUsers
     * @desc Service for getting all users based on role
     * @param {String} role
     * @returns {Object}
     */

  }, {
    key: "listUsers",
    value: function () {
      var _listUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(role) {
        var response;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return User.findAll(role);

              case 2:
                response = _context13.sent;
                return _context13.abrupt("return", response);

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function listUsers(_x12) {
        return _listUsers.apply(this, arguments);
      }

      return listUsers;
    }()
    /**
     * @func getNotifications
     * @desc Service for getting notifications
     * @returns {Object}
     */

  }, {
    key: "getNotifications",
    value: function () {
      var _getNotifications = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
        var response;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return Notification.findAll();

              case 2:
                response = _context14.sent;
                return _context14.abrupt("return", response);

              case 4:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      function getNotifications() {
        return _getNotifications.apply(this, arguments);
      }

      return getNotifications;
    }()
  }]);

  return AdminService;
}();

var adminService = new AdminService();
module.exports = adminService;