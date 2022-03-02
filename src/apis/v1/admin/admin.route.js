const { POST, GET } = require('constants/methods');
const {
    authenticate,
    verifyAdmin,
} = require('middlewares/middleware.protect-route.js');
const validateFieldsFor = require('middlewares/middleware.validator');
const {
    createPersonnelAccount,
    deactiveAccount,
    activateAccount,
    changeRole,
} = require('admin.controller');

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
    {
        path: `${rolePath}/deactive_account`,
        method: POST,
        controller: deactiveAccount,
        localMiddlewares: [authenticate, verifyAdmin],
    },
    {
        path: `${rolePath}/activate_account`,
        method: POST,
        controller: activateAccount,
        localMiddlewares: [authenticate, verifyAdmin],
    },
    {
        path: `${rolePath}/change_role`,
        method: POST,
        controller: changeRole,
        localMiddlewares: [authenticate, verifyAdmin],
    },
];

module.exports = adminRoutes;
