// Imports
const cors = require('cors');
const express = require('express');
const morgan = require('morgan')
const path = require('path');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// TODO: Implementar middlewares

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
const PUERTO = process.env.PUERTO || 3000;
app.listen(PUERTO, () => {
    console.log(`Server on port ${PUERTO}`)
});