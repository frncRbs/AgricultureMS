const setAccessTokenCookie = (res, refreshAccessToken) => {
    res.cookie('refreshAccessToken', refreshAccessToken, {
        httpOnly: false,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dayys
        secure: false,
        sameSite: false,
    });
};

const removeCookie = (res, key) => {
    res.cookie(key, { expires: Date.now() });
};

module.exports = { setAccessTokenCookie, removeCookie };
