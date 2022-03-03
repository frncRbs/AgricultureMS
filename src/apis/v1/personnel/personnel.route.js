const { POST, GET } = require('constants/methods');
const {
    authenticate,
    verifyPersonnel,
} = require('middlewares/middleware.protect-route.js');
const validateFieldsFor = require('middlewares/middleware.validator');
const { createFarmerAccount } = require('personnel.controller');

const rolePath = '/personnel';

const adminRoutes = [
    {
        path: `${rolePath}/create_farmer`,
        method: POST,
        controller: createFarmerAccount,
        localMiddlewares: [
            authenticate,
            verifyPersonnel,
            validateFieldsFor('createFarmer'),
        ],
    },
];

module.exports = adminRoutes;
