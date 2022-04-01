"use strict";

var getDate = function getDate() {
  return new Date().toLocaleDateString();
};

module.exports = {
  getDate: getDate
};