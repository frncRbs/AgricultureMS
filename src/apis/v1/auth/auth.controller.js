const { sendResponse, setConnection } = require('server');
const {
    signAccessToken,
    verifyAccessToken,
} = require('helpers/utils/util.token');
const authService = require('auth.service');

class AuthController {
    /* Login */
    async login(req, res) {
        const { username, password } = req.body;

        const { result, isPasswordMatch, userFromDatabase } =
            await authService.login({ username, password });

        if (!result.length) {
            return sendResponse({
                res,
                statusCode: 401,
                message: 'Invalid username or password',
                isSuccess: false,
            });
        }

        if (!isPasswordMatch) {
            return sendResponse({
                res,
                statusCode: 401,
                isSuccess: false,
                message: 'Invalid username or password',
            });
        }

        return signAccessToken({
            res,
            user: {
                username: userFromDatabase.username,
                role: userFromDatabase.role,
                isActivated: userFromDatabase.isActivated,
            },
            message: 'You are now authenticated!',
        });
    }

    /* Register */
    async register(req, res) {
        const { username, password, repeatPassword, mobileNumber } = req.body;

        const { create, isAlreadyRegistered } = await authService.register({
            username,
            password,
            repeatPassword,
            mobileNumber,
        });

        if (isAlreadyRegistered) {
            return sendResponse({
                res,
                statusCode: 401,
                isSuccess: false,
                message: 'Invalid username or password.',
            });
        }

        await create();

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: true,
            message: 'Account Successfully Created!\n',
            user: 1,
        });
    }

    /* Logout */
    async logout(req, res) {
        const { accessToken, refreshToken } = req.cookies;
        req.headers['Authorization'] = null;

        await authService.logout({
            accessToken,
            refreshToken,
            res,
        });
    }

    /* Get Header */
    async getHeaderAuth(req, res) {
        const { authorization } = req.headers;
        let accessToken = null;

        if (authorization && authorization.startsWidth('Bearer')) {
            accessToken = authorization.split(' ')[1];
        }

        console.log({ accessToken });
        return sendResponse({
            res,
            statusCode: 200,
            isSuccess: true,
            message: 'Request header sent!\n',
            accessToken: accessToken,
        });
    }

    /* Change Password */
    async changePassword(req, res) {
        const accessToken = req.headers.authorization.split(' ')[1];
        const { currentPassword, newPassword } = req.body;

        const { isVerified, updatePassword, isPasswordMatch } =
            await authService.changePassword({
                accessToken,
                currentPassword,
                newPassword,
            });

        if (!isVerified) {
            return sendResponse({
                res,
                statusCode: 401,
                isSuccess: false,
                message: 'Unauthorized',
            });
        }

        if (!isPasswordMatch) {
            return sendResponse({
                res,
                statusCode: 401,
                isSuccess: false,
                message: 'Invalid Password.',
            });
        }

        await updatePassword();

        return sendResponse({
            res,
            statusCode: 200,
            isSuccess: true,
            message: 'Password successfully changed!',
        });
    }

    /* Forgot Password */
    async forgotPassword(req, res) {
        const { mobileNumber } = req.body;
    }
}

module.exports = new AuthController();
