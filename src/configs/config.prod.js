const express = require('express');
const path = require('path');
const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
    PORT,
    HOST,
    NODE_ENV,
    CLIENT_HOST,
} = require('constants/envs');
const cors = require('cors');
const globalConfig = require('config.global');

module.exports = {
    app: {
        port: PORT,
        host: HOST,
        globalMiddlewares: [
            cors({
                origin: CLIENT_HOST,
            }),
            ...globalConfig.middlewares,
            express.static(path.join(__dirname, '/client/build')),
        ],
    },
    db: {
        mysql: {
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASSWORD,
            database: MYSQL_DATABASE,
        },
    },
    mailjet: {
        api_key: 'your-mailjet-api-key',
        secret: 'your-mailjet-secret',
    },
};
