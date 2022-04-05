const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
    PORT,
    HOST,
    MYSQL_PORT
} = require('constants/envs');
const logger = require('morgan');
const cors = require('cors');
const globalConfig = require('config.global');

const {
    default: errorHandler,
} = require('middlewares/middleware.error-handler');

module.exports = {
    app: {
        port: PORT,
        host: HOST,
        globalMiddlewares: [
            ...globalConfig.middlewares,
            cors({
                origin: 'http://localhost:3000',
            }),
            /* Dev Middlware */
            logger('dev'),

            errorHandler,
        ],
    },
    db: {
        mysql: {
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASSWORD,
            database: MYSQL_DATABASE,
            port: MYSQL_PORT
        },
    },
    mailjet: {
        api_key: 'your-mailjet-api-key',
        secret: 'your-mailjet-secret',
    },
};
