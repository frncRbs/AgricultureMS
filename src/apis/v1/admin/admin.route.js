const { POST, GET } = require('constants/methods');
const {
    authenticate,
    verifyAdmin,
} = require('middlewares/middleware.protect-route.js');
const validateFieldsFor = require('middlewares/middleware.validator');
const {
    createPersonnelAccount,
    deactiveAccount,
    setAccountStatus,
    changeRole,
    createNewProgram,
    listPrograms,
    listUsers,
    updateProgram,
    deleteProgram,
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
            // validateFieldsFor('createPersonnel'),
        ],
    },
    {
        path: `${rolePath}/set_account_status`,
        method: POST,
        controller: setAccountStatus,
        localMiddlewares: [authenticate, verifyAdmin],
    },
    {
        path: `${rolePath}/change_role`,
        method: POST,
        controller: changeRole,
        localMiddlewares: [authenticate, verifyAdmin],
    },
    {
        path: `${rolePath}/new_program`,
        method: POST,
        controller: createNewProgram,
        localMiddlewares: [authenticate, verifyAdmin],
    },
    {
        path: `${rolePath}/list_programs`,
        method: POST,
        controller: listPrograms,
        localMiddlewares: [authenticate, verifyAdmin],
    },
    {
        path: `${rolePath}/delete_program`,
        method: POST,
        controller: deleteProgram,
        localMiddlewares: [authenticate, verifyAdmin],
    },
    {
        path: `${rolePath}/update_program`,
        method: POST,
        controller: updateProgram,
        localMiddlewares: [authenticate, verifyAdmin],
    },
    {
        path: `${rolePath}/list_users`,
        method: POST,
        controller: listUsers,
        localMiddlewares: [authenticate, verifyAdmin],
    },
];

module.exports = adminRoutes;
