"use strict";

var joi = require('joi');

var fields = {
  firstname: joi.string().trim().required(),
  middlename: joi.string().trim(),
  lastname: joi.string().trim().required(),
  gender: joi.string().trim().required(),
  role: joi.string().trim(),
  isActivated: joi.number().required(),
  username: joi.string().trim().alphanum().min(3).max(30).required(),
  accessToken: [joi.string().trim(), joi.number()],
  emailAddress: joi.string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net']
    }
  }).trim(),
  password: joi.string().min(4).alphanum().trim().required(),
  mobileNumber: joi.string().length(10).pattern(/^[0-9]+$/).trim().required(),
  street: joi.string().required(),
  subdivision: joi.string().required(),
  sitio: joi.string().required(),
  birthDate: joi.string().required(),
  placeOfBirth: joi.string().required(),
  barangay: joi.string().required(),
  municipality: joi.string().required(),
  zipCode: joi.string().length(4).trim().required(),
  position: joi.string().required(),
  civilStatus: joi.string().required(),
  religion: joi.string().required()
};
var validateFieldsFor = {
  login: joi.object({
    username: fields.username,
    password: fields.password
  }),
  changePassword: joi.object({
    currentPassword: fields.password,
    newPassword: fields.password
  }),
  register: joi.object({
    firstname: fields.firstname,
    middlename: fields.middlename,
    lastname: fields.lastname,
    gender: fields.gender,
    username: fields.username,
    password: fields.password,
    mobileNumber: fields.mobileNumber,
    position: fields.position,
    birthDate: fields.birthDate,
    placeOfBirth: fields.placeOfBirth,
    municipality: fields.municipality,
    street: fields.street,
    subdivision: fields.subdivision,
    barangay: fields.barangay,
    sitio: fields.sitio,
    zipCode: fields.zipCode,
    civilStatus: fields.civilStatus,
    religion: fields.religion
  }),
  createPersonnel: joi.object({
    firstname: fields.firstname,
    lastname: fields.lastname,
    gender: fields.gender,
    role: fields.role,
    isActivated: fields.isActivated,
    middlename: fields.middlename,
    username: fields.username,
    password: fields.password,
    mobileNumber: fields.mobileNumber
  }),
  createFarmer: joi.object({
    firstname: fields.firstname,
    lastname: fields.lastname,
    gender: fields.gender,
    role: fields.role,
    isActivated: fields.isActivated,
    middlename: fields.middlename,
    username: fields.username,
    password: fields.password,
    mobileNumber: fields.mobileNumber
  })
};
module.exports = validateFieldsFor;