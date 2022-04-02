const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

module.exports = {
    middlewares: [
        bodyParser.urlencoded({ extended: true }),
        bodyParser.json(),
        express.json(),
        cookieParser(),
        helmet(),
        /* override with different headers; last one takes precedence */
        methodOverride('X-HTTP-Method') /* Microsoft */,
        methodOverride('X-HTTP-Method-Override') /* Google/GData */,
        methodOverride('X-Method-Override') /* IBM */,
        (req, res, next) => {
            const allowedOrigins = ['http://localhost:3000'];
            const origin = req.headers.origin;
            if (allowedOrigins.includes(origin)) {
                res.setHeader('Access-Control-Allow-Origin', origin);
            }

            res.header(
                'Access-Control-Allow-Methods',
                'GET, PATCH, PUT, DELETE, POST'
            );

            res.header('Access-Control-Allow-Credentials', true);

            return next();
        },
    ],
};
