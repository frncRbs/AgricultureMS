"use strict";

var getHeader = function getHeader(header) {
  var authorization = header.authorization;
  var accessToken = null;

  if (authorization && authorization.startsWidth('Bearer')) {
    accessToken = authorization.split(' ')[1];
  }

  return accessToken;
};

module.exports = {
  getHeader: getHeader
};