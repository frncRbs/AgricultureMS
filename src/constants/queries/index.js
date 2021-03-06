const authQueries = {
    QUERY_SELECT_ALL_USERS: 'QUERY_SELECT_ALL_USERS',
    QUERY_INSERT_USER: 'QUERY_INSERT_USER',
    QUERY_SELECT_USER: 'QUERY_SELECT_USER',
    QUERY_UPDATE_PASSWORD: 'QUERY_UPDATE_PASSWORD',
};

const adminQueries = {
    QUERY_INSERT_FULL_DETAILED_USER_ACCOUNT:
        'QUERY_INSERT_FULL_DETAILED_USER_ACCOUNT',
};

const tokenQueries = {
    QUERY_INSERT_TOKEN: 'QUERY_INSERT_TOKEN',
    QUERY_SELECT_TOKEN: 'QUERY_SELECT_TOKEN',
    QUERY_DELETE_TOKEN: 'QUERY_DELETE_TOKEN',
};

module.exports = { ...authQueries, ...adminQueries, ...tokenQueries };
