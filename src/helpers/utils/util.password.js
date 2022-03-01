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

const comparePassword = async (identifier, userPassword) => {
    let isPasswordVerified = false;
    const querySelectUser = createQueryStatement(QUERY_SELECT_USER);

    const username = identifier;
    if (!username) return false;

    const [RowDataPacket] = await setConnection(querySelectUser, [username]);

    if (!Object.keys(RowDataPacket).length) return false;

    const passwordFromDb = RowDataPacket['password'];

    /* It would return true or false */
    isPasswordVerified = compareSync(userPassword, passwordFromDb);
    console.log({ userPassword, passwordFromDb });

    return isPasswordVerified;
};

module.exports = { hashPassword, comparePassword };
