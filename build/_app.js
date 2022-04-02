"use strict";

var server = require("./server");

var controllerV1 = require("./apis/v1");

var configs = require("./configs");

var controllers = [controllerV1];
/* Run Server */

var _app = function _app() {
  server.run();
  server.setGlobalMiddlewares(configs.app.globalMiddlewares);
  server.setControllers(controllers);
};

_app();
/**
 * @HowToRun Procfile = heroku local web
 */