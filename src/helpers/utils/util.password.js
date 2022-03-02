const { genSaltSync, hashSync, compareSync } = require('bcryptjs');
const User = require('model.user');

const hashPassword = (password) => {
    const salt = genSaltSync(10);

    const hashPassword = hashSync(password, salt);

    return hashPassword;
};

const comparePassword = async (username, userPassword) => {
    let isPasswordVerified = false;

    const response = await User.findOne({ username });

    if (!response.length) isPasswordVerified = false;

    /* It would return true or false */
    isPasswordVerified = compareSync(userPassword, response[0].password);

    return isPasswordVerified;
};

module.exports = { hashPassword, comparePassword };
