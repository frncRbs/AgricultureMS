const { sign, verify } = require('jsonwebtoken');

const { sendResponse } = require('server');
const { ACCESS_TOKEN } = require('constants/envs');
const { User } = require('models/model.user');
const { Role } = require('models/model.role');

class Token {
    static async signAccessToken({ res, user, message }) {
        const accessToken = sign({...user }, ACCESS_TOKEN, {
            expiresIn: '7d' /* 7 Days */ ,
        });

        return sendResponse({
            res,
            statusCode: 201,
            isSuccess: true,
            user: {
                ...user,
                accessToken,
            },
            message,
        });
    }

    static async refreshAccessToken(req, res) {
        const { ip, cookie } = req;

        /* Set Cookie */
        // setAccessTokenCookie(res, token);
    }

    static async verifyAccessToken(accessToken) {
        if (!accessToken) return { isVerified: false, username: null };

        const { username, role } = verify(accessToken, ACCESS_TOKEN);

        const _user = await User.findOne({ username });

        const _roleFromDb = await Role.findOne({ id: _user[0].roleId });

        if (username !== _user[0].username && role !== _roleFromDb[0].role) {
            return { isVerified: false, username: null };
        }

        return { isVerified: true, username, role };
    }
}

module.exports = Token;