const { sign, verify } = require('jsonwebtoken');

const { setConnection, sendResponse } = require('server');
const { ACCESS_TOKEN } = require('constants/envs');
const { QUERY_SELECT_USER } = require('constants/queries');
const { setAccessTokenCookie } = require('util.cookies');
const createQueryStatement = require('helpers/queries/query.statements');

class Token {
    static async signAccessToken({ res, user, message }) {
        const accessToken = sign({ ...user }, ACCESS_TOKEN, {
            expiresIn: '7d' /* 7 Days */,
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

        const queryOneUser = createQueryStatement(QUERY_SELECT_USER);
        const [RowDataPacket] = await setConnection(queryOneUser, [username]);

        if (
            username !== RowDataPacket.username &&
            role !== RowDataPacket.role
        ) {
            return { isVerified: false, username: null };
        }

        return { isVerified: true, username, role };
    }
}

module.exports = Token;
