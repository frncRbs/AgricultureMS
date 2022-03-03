const { POST, GET } = require('constants/methods');
const {
    authenticate,
    verifyFarmer,
} = require('middlewares/middleware.protect-route.js');
const validateFieldsFor = require('middlewares/middleware.validator');
const {
    requestService,
    requestCrop,
    viewRequestHistory,
} = require('farmer.controller');

const rolePath = '/farmer';

const adminRoutes = [
    {
        path: `${rolePath}/request_service`,
        method: POST,
        controller: requestService,
        localMiddlewares: [authenticate, verifyFarmer],
    },
    {
        path: `${rolePath}/request_crop`,
        method: POST,
        controller: requestCrop,
        localMiddlewares: [authenticate, verifyFarmer],
    },
    {
        path: `${rolePath}/request_history`,
        method: GET,
        controller: viewRequestHistory,
        localMiddlewares: [authenticate, verifyFarmer],
    },
];

module.exports = adminRoutes;
