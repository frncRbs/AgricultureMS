const { POST, GET } = require('constants/methods');
const {
    authenticate,
    verifyAdmin,
} = require('middlewares/middleware.protect-route.js');
const validateFieldsFor = require('middlewares/middleware.validator');
const { createPersonnelAccount } = require('admin.controller');

const rolePath = '/admin';

const adminRoutes = [
    {
        path: `${rolePath}/create_personnel`,
        method: POST,
        controller: createPersonnelAccount,
        localMiddlewares: [
            authenticate,
            verifyAdmin,
            validateFieldsFor('createPersonnel'),
        ],
    },
];

module.exports = adminRoutes;
