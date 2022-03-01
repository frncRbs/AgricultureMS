const User = require('auth.model');
const {
    comparePassword,
    hashPassword,
} = require('helpers/utils/util.password');
const { removeCookie } = require('helpers/utils/util.cookies');
const { verifyAccessToken } = require('helpers/utils/util.token');

class AuthService {
    /* Login Service */
    async login({ username, password }) {
        const result = await User.findOne({ username });

        const isPasswordMatch = await comparePassword(username, password);

        const userFromDatabase = result[0]; /* Access user */

        return { result, isPasswordMatch, userFromDatabase };
    }

    /* Register Service */
    async register({ username, password, repeatPassword, mobileNumber }) {
        const encryptedPassword = await hashPassword(password);

        const isAlreadyRegistered = await User.findOne({ username });

        const newUser = { username, password: encryptedPassword, mobileNumber };

        return {
            isAlreadyRegistered: isAlreadyRegistered.length,
            create: async () => await User.create(newUser),
        };
    }

    /* Logout Service */
    async logout({ accessToken, refreshToken, res }) {
        await removeCookie(res, accessToken);
        await removeCookie(res, refreshToken);
    }

    /* Change Password Service*/
    async changePassword({ accessToken, currentPassword, newPassword, req }) {
        const { isVerified, username } = await verifyAccessToken(accessToken);

        const isPasswordMatch = await comparePassword(
            username,
            currentPassword
        );

        return {
            isVerified,
            isPasswordMatch,
            updatePassword: async () =>
                await User.updateOne(
                    { username },
                    { password: hashPassword(newPassword) }
                ),
        };
    }
}

const authService = new AuthService();

module.exports = authService;
