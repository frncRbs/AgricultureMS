const getHeader = (header) => {
    const { authorization } = header;
    let accessToken = null;

    if (authorization && authorization.startsWidth('Bearer')) {
        accessToken = authorization.split(' ')[1];
    }

    return accessToken;
};

module.exports = { getHeader };
