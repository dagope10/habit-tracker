require('dotenv').config({path: './entorno.env'});

var db = require('mysql2/promise');

const connection = db.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});


module.exports = connection; 