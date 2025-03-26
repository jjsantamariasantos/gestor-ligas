// backend/server.js
const express = require('express');
const app = express();
const db = require('./config/db'); // Importa la conexión a la base de datos

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Servidor funcionando con MariaDB');
});
app.get('/equipos', (req, res) => {
    db.query('SELECT * FROM equipos', (err, results) => {
        if (err) {
            console.error('Error al obtener equipos:', err);
            res.status(500).send('Error al obtener equipos');
        } else {
            res.json(results); // Devuelve los equipos en formato JSON
        }
    });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});