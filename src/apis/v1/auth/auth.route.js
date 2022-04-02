const { POST, GET, DELETE } = require('constants/methods');
const { authenticate } = require('middlewares/middleware.protect-route.js');
const validateFieldsFor = require('middlewares/middleware.validator');
const { login, register, logout, changePassword } = require('auth.controller');

const authRoutes = [
    {
        path: '/login',
        method: POST,
        controller: login,
        localMiddlewares: [validateFieldsFor('login')],
    },
    {
        path: '/register',
        method: POST,
        controller: register,
        localMiddlewares: [validateFieldsFor('register')],
    },
    {
        path: '/logout',
        method: DELETE,
        controller: logout,
        localMiddlewares: [],
    },
    {
        path: '/change_password',
        method: POST,
        controller: changePassword,
        localMiddlewares: [authenticate, validateFieldsFor('changePassword')],
    },
    {
        path: '/test',
        method: GET,
        controller: (req, res) => {
            res.json({ status: 'success' });
        },
        localMiddlewares: [],
    },
];

module.exports = authRoutes;
