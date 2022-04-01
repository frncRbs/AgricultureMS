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

        const { isPasswordMatch, userFromDatabase } = await authService.login({
            username,
            password,
        });

        if (!userFromDatabase.length) {
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
                username: userFromDatabase[0].username,
                firstname: userFromDatabase[0].firstname,
                role: userFromDatabase[0].role,
                id: userFromDatabase[0].id,
                isActivated: userFromDatabase[0].isActivated,
            },
            message: 'You are now authenticated!',
        });
    }

    /* Register */
    async register(req, res) {
        const newUser = req.body;

        const { create, isAlreadyRegistered, isMobileAlreadyExist } =
        await authService.register(newUser);

        if (isAlreadyRegistered.length) {
            return sendResponse({
                res,
                statusCode: 401,
                isSuccess: false,
                message: 'Invalid username or password.',
            });
        }

        if (isMobileAlreadyExist.length) {
            return sendResponse({
                res,
                statusCode: 401,
                isSuccess: false,
                message: 'Mobile number is already exist.',
            });
        }

        await create();

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: true,
            message: 'Account Successfully Created!',
            user: { firstname: newUser.firstname },
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