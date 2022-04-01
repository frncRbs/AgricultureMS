"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ApiError = require("../helpers/utils/util.api.error");

var errorHandler = function errorHandler(err, req, res, next) {
  var error = _objectSpread({}, err);

  console.log({
    error: error.name,
    err: err.name
  });
  error.message = err.message;

  if (err.name === 'CastError') {
    error = new ApiError('Resource not found', 404);
  }

  if (err.name === 'SyntaxError') {
    error = new ApiError('Synax Error', 400);
  }

  if (err.errno === 1062) {
    error = new ApiError('Field Duplicated', 401);
  }

  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    error = new ApiError('JsonWebTokenError', 401);
  }

  if (err.name === 'ValidationError') {
    var message = Object.values(err.errors).map(function (error) {
      return error.message;
    }).join(', ');
    error = new ApiError(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

var _default = errorHandler;
exports["default"] = _default;