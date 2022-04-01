"use strict";

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require("../helpers/utils/util.password"),
    comparePassword = _require.comparePassword,
    hashPassword = _require.hashPassword;
/* Farmers */


var farmers = [(_ref = {
  role: 'farmer',
  firstname: 'France',
  lastname: 'Rebollos',
  middlename: 'France'
}, _defineProperty(_ref, "middlename", 'France'), _defineProperty(_ref, "position", 'rice program'), _defineProperty(_ref, "mobileNumber", '09552536888'), _defineProperty(_ref, "gender", 'male'), _defineProperty(_ref, "birthDate", '03-01-2020'), _defineProperty(_ref, "placeOfBirth", 'Ayala City'), _defineProperty(_ref, "civilStatus", 'single'), _defineProperty(_ref, "religion", 'catholic'), _defineProperty(_ref, "street", 'Ayala Street'), _defineProperty(_ref, "subdivision", 'Subdivison 1'), _defineProperty(_ref, "sitio", 'sitio 1'), _defineProperty(_ref, "barangay", 'Barangay Santa Cruz'), _defineProperty(_ref, "municipality", 'Ayala Municipality'), _defineProperty(_ref, "zipCode", '3001'), _defineProperty(_ref, "username", 'farfrance'), _defineProperty(_ref, "password", hashPassword('farmer')), _ref), {
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