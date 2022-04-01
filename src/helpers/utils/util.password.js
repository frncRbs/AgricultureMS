const { genSaltSync, hashSync, compareSync } = require('bcryptjs');
const { User } = require('models/model.user');

const hashPassword = (password) => {
    const salt = genSaltSync(10);

    const hashPassword = hashSync(password, salt);

    return hashPassword;
};

const comparePassword = async(username, userPassword) => {
    const user = await User.findOne({ username });

    if (!user.length) return false;

    /* It would return true or false */
    return compareSync(userPassword, user[0].password);
};

module.exports = { hashPassword, comparePassword };