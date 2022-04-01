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
  ]
};