"use strict";

var express = require('express');

var helmet = require('helmet');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var methodOverride = require('method-override');

module.exports = {
  middlewares: [bodyParser.urlencoded({
    extended: true
  }), bodyParser.json(), express.json(), cookieParser(), helmet(),
  /* override with different headers; last one takes precedence */
  methodOverride('X-HTTP-Method')
  /* Microsoft */
  , methodOverride('X-HTTP-Method-Override')
  /* Google/GData */
  , methodOverride('X-Method-Override')
  /* IBM */
  , function (req, res, next) {
    // const allowedOrigins = [
    //     'http://localhost:3000',
    //     'https://ayala-agriculturist.netlify.app',
    // ];
    // const origin = req.headers.origin;
    // if (allowedOrigins.includes(origin)) {
    // }
    res.header('Access-Control-Allow-Origin', 'https://ayala-agriculturist.netlify.app');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, DELETE, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  }]
};