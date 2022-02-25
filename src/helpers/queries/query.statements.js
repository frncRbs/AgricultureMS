const {
    QUERY_SELECT_ALL_USERS,
    QUERY_INSERT_USER,
    QUERY_SELECT_USER,
    QUERY_UPDATE_PASSWORD,
    QUERY_INSERT_FULL_DETAILED_USER_ACCOUNT,
    QUERY_INSERT_TOKEN,
    QUERY_SELECT_TOKEN,
    QUERY_DELETE_TOKEN,
} = require('constants/queries');

const createQueryStatement = (type) => {
    switch (type) {
        case QUERY_SELECT_ALL_USERS:
            return 'SELECT * FROM users';
        case QUERY_INSERT_USER:
            return 'INSERT INTO users SET username = ?, password = ?, mobileNumber = ?';
        case QUERY_SELECT_USER:
            return 'SELECT * FROM users WHERE username = ?';
        case QUERY_UPDATE_PASSWORD:
            return 'UPDATE users SET password = ? WHERE username = ?';

        /* Admin Statements*/
        case QUERY_INSERT_FULL_DETAILED_USER_ACCOUNT:
            return `INSERT INTO USERS SET 
                    firstname = ?, middlename = ?, 
                    lastname = ?, emailAddress = ?, 
                    mobileNumber = ?, username = ?, 
                    password = ?, gender = ?, 
                    role = ?, isActivated = ?, 
                    accessToken = ? refreshToken = ?, resetPasswordToken = ?, birthDate = ?, 
                    age = ?, createdAt = ?, updatedAt = ?`;

        /* Token Statements */
        case QUERY_INSERT_TOKEN:
            return 'INSERT INTO refreshToken SET token = ? WHERE userId = ?';
        default:
            break;
    }
};

module.exports = createQueryStatement;
