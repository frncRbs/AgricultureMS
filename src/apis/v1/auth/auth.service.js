const { setConnection } = require('server');
const {
    comparePassword,
    hashPassword,
} = require('helpers/utils/util.password');
const createQueryStatement = require('helpers/queries/query.statements');
const {
    QUERY_SELECT_USER,
    QUERY_INSERT_USER,
    QUERY_UPDATE_PASSWORD,
} = require('constants/queries');
const { removeCookie } = require('helpers/utils/util.cookies');
const { getHeader } = require('helpers/utils/util.header');

class AuthService {
    /* Login Service */
    async login({ username, password }) {
        const querySelectUserStatement =
            createQueryStatement(QUERY_SELECT_USER);

        const result = await setConnection(querySelectUserStatement, [
            username,
            password,
        ]);

        const isPasswordMatch = await comparePassword(username, password);

        const userFromDatabase = result[0]; /* Access user */

        return { result, isPasswordMatch, userFromDatabase };
    }

    /* Register Service */
    async register({ username, password, repeatPassword, mobileNumber }) {
        const encryptedPassword = hashPassword(password);

        const queryInsertUserStatement =
            createQueryStatement(QUERY_INSERT_USER);
        const querySelectUserStatement =
            createQueryStatement(QUERY_SELECT_USER);

        const newUser = [username, encryptedPassword, mobileNumber];

        /* Query existing user and throw an error*/
        const isAlreadyRegistered = await setConnection(
            querySelectUserStatement,
            newUser
        );

        return {
            isAlreadyRegistered,
            insertUser: async () => {
                return await setConnection(queryInsertUserStatement, newUser);
            },
        };
    }

    /* Logout Service */
    async logout({ accessToken, refreshToken, res }) {
        await removeCookie(res, accessToken);
        await removeCookie(res, refreshToken);
    }

    /* Change Password Service*/
    async changePassword({ accessToken, currentPassword, newPassword }) {
        const hashedNewPassword = hashPassword(newPassword);

        const queryUpdatePasswordStatement = createQueryStatement(
            QUERY_UPDATE_PASSWORD
        );

        const { isVerified, username } = await verifyAccessToken(accessToken);

        const isPasswordMatch = await comparePassword(
            req.cookies,
            currentPassword
        );

        return {
            isVerified,
            username,
            isPasswordMatch,
            updatePassword: async () => {
                await setConnection(queryUpdatePasswordStatement, [
                    hashedNewPassword,
                    username,
                ]);
            },
        };
    }
}

const authService = new AuthService();

module.exports = authService;
