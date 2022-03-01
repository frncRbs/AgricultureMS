const {
    ADMIN_ROLE,
    FARMER_ROLE,
    PERSONNEL_ROLE,
    UNSIGNED_ROLE,
} = require('constants/envs');

const { sendResponse } = require('server');
const { verifyAccessToken } = require('../helpers/utils/util.token');

class ProtectRoute {
    async authenticate(req, res, next) {
        const { authorization } = req.headers;
        let accessToken = null;

        console.log('authorization', authorization);
        if (authorization && authorization.startsWith('Bearer')) {
            accessToken = authorization.split(' ')[1];
        }

        const { isVerified } = await verifyAccessToken(accessToken);

        if (!isVerified) {
            return sendResponse({
                res,
                statusCode: 401,
                isSuccess: false,
                message: 'You are not authorized to access this route.',
            });
        }

        next();
    }

    async verifyAdmin(req, res, next) {
        const { authorization } = req.headers;
        let accessToken = null;

        console.log({ authorization });
        if (authorization && authorization.startsWith('Bearer')) {
            accessToken = authorization.split(' ')[1];
        }

        const { role } = await verifyAccessToken(accessToken);

        if (role !== ADMIN_ROLE) {
            return sendResponse({
                res,
                statusCode: 401,
                isSuccess: false,
                message: 'You are not authorized to access this route.',
            });
        }

        next();
    }

    async verifyPersonnel() {
        const { authorization } = req.headers;
        let accessToken = null;

        if (authorization && authorization.startsWith('Bearer')) {
            accessToken = authorization.split(' ')[1];
        }

        const { role } = await verifyAccessToken(accessToken);

        if (role !== PERSONNEL_ROLE) {
            return sendResponse({
                res,
                statusCode: 401,
                isSuccess: false,
                message: 'You are not authorized to access this route.',
            });
        }

        next();
    }

    async verifyFarmer() {
        const { authorization } = req.headers;
        let accessToken = null;

        if (authorization && authorization.startsWith('Bearer')) {
            accessToken = authorization.split(' ')[1];
        }

        const { role } = await verifyAccessToken(accessToken);

        if (role !== FARMER_ROLE) {
            return sendResponse({
                res,
                statusCode: 401,
                isSuccess: false,
                message: 'You are not authorized to access this route.',
            });
        }

        next();
    }
}

module.exports = new ProtectRoute();
