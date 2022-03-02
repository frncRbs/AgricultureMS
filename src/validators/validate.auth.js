const joi = require('joi');

const fields = {
    firstname: joi.string().trim().required(),

    middlename: joi.string().trim(),

    lastname: joi.string().trim().required(),

    gender: joi.string().trim().required(),

    role: joi.string().trim(),

    isActivated: joi.number().required(),

    username: joi.string().trim().alphanum().min(3).max(30).required(),

    accessToken: [joi.string().trim(), joi.number()],

    emailAddress: joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .trim(),

    password: joi.string().min(4).alphanum().trim().required(),

    mobileNumber: joi
        .string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .trim()
        .required(),

    birthYear: joi.number().integer().min(1900).max(2013),
};

const validateFieldsFor = {
    login: joi.object({
        username: fields.username,
        password: fields.password,
    }),

    changePassword: joi.object({
        currentPassword: fields.password,
        newPassword: fields.password,
    }),

    register: joi.object({
        username: fields.username,
        password: fields.password,
        mobileNumber: fields.mobileNumber,
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
        mobileNumber: fields.mobileNumber,
        emailAddress: fields.emailAddress,
    }),
};

module.exports = validateFieldsFor;
