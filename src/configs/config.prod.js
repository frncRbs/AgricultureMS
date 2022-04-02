const express = require('express');
const path = require('path');
const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
    PORT,
    HOST,
    MYSQL_PORT,
    CLIENT_HOST,
} = require('constants/envs');
const cors = require('cors');
const globalConfig = require('config.global');

module.exports = {
    app: {
        port: PORT,
        host: HOST,
        globalMiddlewares: [
            ...globalConfig.middlewares,
            cors({
                origin: CLIENT_HOST,
                optionsSuccessStatus: 200,
                origin: '*',
                methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            }),
        ],
    },
    db: {
        mysql: {
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASSWORD,
            database: MYSQL_DATABASE,
            port: MYSQL_PORT,
        },
    },
    mailjet: {
        api_key: 'your-mailjet-api-key',
        secret: 'your-mailjet-secret',
    },
};
