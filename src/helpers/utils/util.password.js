const { verify } = require('jsonwebtoken');
const { genSaltSync, hashSync, compareSync } = require('bcryptjs');

const { QUERY_SELECT_USER } = require('constants/queries');
const { ACCESS_TOKEN } = require('constants/envs');
const { setConnection } = require('server');
const createQueryStatement = require('helpers/queries/query.statements');

const hashPassword = (password) => {
    const salt = genSaltSync(10);

    const hashPassword = hashSync(password, salt);

    return hashPassword;
};

const comparePassword = async(identifier, userPassword) => {
    let isPasswordVerified = false;
    const querySelectUser = createQueryStatement(QUERY_SELECT_USER);

    /* Checking if we pass an object */
    if (typeof identifier === 'object') {
        const request = identifier;
        if (!request.accessToken) return false;

        const { username } = verify(request.accessToken, ACCESS_TOKEN);

        const [RowDataPacket] = await setConnection(querySelectUser, [
            username,
        ]);

        if (!RowDataPacket) return false;

        const passwordFromDb = RowDataPacket['password'];

        /* It would return true or false */
        isPasswordVerified = compareSync(userPassword, passwordFromDb);
    } else {
        const username = identifier;
        if (!username) return false;

        const [RowDataPacket] = await setConnection(querySelectUser, [
            username,
        ]);

        if (!RowDataPacket) return false;

        const passwordFromDb = RowDataPacket['password'];

        /* It would return true or false */
        isPasswordVerified = compareSync(userPassword, passwordFromDb);
    }

    return isPasswordVerified;
};

module.exports = { hashPassword, comparePassword };