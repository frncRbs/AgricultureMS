"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ref;

var _require = require("../helpers/utils/util.password"),
    comparePassword = _require.comparePassword,
    hashPassword = _require.hashPassword;
/* Farmers */


var farmers = [(_ref = {
  role: 'farmer',
  firstname: 'France',
  lastname: 'Rebollos',
  middlename: 'France'
}, (0, _defineProperty2["default"])(_ref, "middlename", 'France'), (0, _defineProperty2["default"])(_ref, "position", 'rice program'), (0, _defineProperty2["default"])(_ref, "mobileNumber", '09552536888'), (0, _defineProperty2["default"])(_ref, "gender", 'male'), (0, _defineProperty2["default"])(_ref, "birthDate", '03-01-2020'), (0, _defineProperty2["default"])(_ref, "placeOfBirth", 'Ayala City'), (0, _defineProperty2["default"])(_ref, "civilStatus", 'single'), (0, _defineProperty2["default"])(_ref, "religion", 'catholic'), (0, _defineProperty2["default"])(_ref, "street", 'Ayala Street'), (0, _defineProperty2["default"])(_ref, "subdivision", 'Subdivison 1'), (0, _defineProperty2["default"])(_ref, "sitio", 'sitio 1'), (0, _defineProperty2["default"])(_ref, "barangay", 'Barangay Santa Cruz'), (0, _defineProperty2["default"])(_ref, "municipality", 'Ayala Municipality'), (0, _defineProperty2["default"])(_ref, "zipCode", '3001'), (0, _defineProperty2["default"])(_ref, "username", 'farfrance'), (0, _defineProperty2["default"])(_ref, "password", hashPassword('farmer')), _ref), {
  role: 'farmer',
  firstname: 'Jeth',
  middlename: 'Jeth',
  lastname: 'Jeth',
  position: 'corn program',
  mobileNumber: '09552536888',
  gender: 'female',
  birthDate: '03-01-2020',
  placeOfBirth: 'Ayala City',
  civilStatus: 'single',
  religion: 'catholic',
  street: 'Ayala Street',
  subdivision: 'Subdivison 1',
  sitio: 'sitio 2',
  barangay: 'Barangay Santa Cruz',
  municipality: 'Ayala Municipality',
  zipCode: '3001',
  username: 'farjeth',
  password: hashPassword('farmer')
}];
/* Personnels */

var personnel = [{
  role: 'personnel',
  firstname: 'France',
  lastname: 'Rebollos',
  middlename: 'France',
  position: 'rice program',
  mobileNumber: '09552536888',
  gender: 'male',
  birthDate: '03-01-2020',
  placeOfBirth: 'Ayala City',
  civilStatus: 'single',
  religion: 'catholic',
  street: 'Ayala Street',
  subdivision: 'Subdivison 1',
  sitio: 'sitio 1',
  barangay: 'Barangay Santa Cruz',
  municipality: 'Ayala Municipality',
  zipCode: '3001',
  username: 'perfrance',
  password: hashPassword('personnel')
}, {
  role: 'personnel',
  firstname: 'Jeth',
  lastname: 'Ro',
  middlename: 'Jeth',
  position: 'corn program',
  mobileNumber: '09552536888',
  gender: 'female',
  birthDate: '03-01-2020',
  placeOfBirth: 'Ayala City',
  civilStatus: 'single',
  religion: 'catholic',
  street: 'Ayala Street',
  subdivision: 'Subdivison 1',
  sitio: 'sitio 2',
  barangay: 'Barangay Santa Cruz',
  municipality: 'Ayala Municipality',
  zipCode: '3001',
  username: 'perjeth',
  password: hashPassword('personnel')
}];
/* Admin */

var admin = [{
  role: 'admin',
  firstname: 'Juan',
  lastname: 'Pedro',
  middlename: 'John',
  mobileNumber: '09552536888',
  gender: 'male',
  isActivated: 1,
  birthDate: '03-01-2020',
  placeOfBirth: 'Ayala City',
  username: 'adfrance',
  password: hashPassword('admin')
}];
var users = [].concat(admin);
module.exports = users;