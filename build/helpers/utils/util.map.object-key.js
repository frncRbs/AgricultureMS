"use strict";

var mapObjectKey = function mapObjectKey(object) {
  var toPlaceholder = Object.keys(object).map(function (key) {
    return "".concat(key, " = ?");
  }).join(', ');
  var toObjectKey = Object.keys(object).map(function (key) {
    return key;
  }).join('');
  var toObjectValue = Object.keys(object).map(function (key) {
    return object[key];
  });
  return {
    toPlaceholder: toPlaceholder,
    // key = value, key = value
    toObjectValue: toObjectValue,
    // [value, value, value]
    toObjectKey: toObjectKey // key

  };
};

module.exports = mapObjectKey;