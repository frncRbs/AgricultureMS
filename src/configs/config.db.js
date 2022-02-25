const mysql = require('mysql2');
const { db } = require('./config.dev');

const connection = mysql.createPool({ ...db.mysql }).promise();

module.exports = connection;
