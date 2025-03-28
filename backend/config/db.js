// backend/config/db.js
const mysql = require('mysql2');
require.dotenv().config(); // Cargar variables de entorno desde .env
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0 
}).promise(); // Promisify the pool to use async/await

module.exports = pool;
// backend/config/db.js