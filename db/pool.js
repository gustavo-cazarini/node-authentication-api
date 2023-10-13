require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.HOSTNAME,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    port: process.env.DBPORT,
    database: process.env.DBNAME,
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
});

module.exports = pool;