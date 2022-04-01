"use strict";

var asyncHandler = function asyncHandler(cb) {
  return function (req, res, next) {
    return Promise.resolve(cb(req, res, next))["catch"](next);
  };
};

module.exports = asyncHandler;