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
    ],
};
