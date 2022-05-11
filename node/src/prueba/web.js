// Este archivo de aqui sirve para la configuracion del Node.js

const express = require('express');
const app = express();
// const mysql = require('mysql');
const myconn = require('express-myconnection');
const req = require('express/lib/request');

const path = require('path');


app.use(express.static(__dirname + "/routes/web/prueba/public"))


// ============================================================================== //
// SETTINGS
// ============================================================================== //
app.set('port', process.env.PORT || 3000);

/* const dbOpscions = {
    host: 'localhost',
    post: '3306',
    user: 'root',
    password: 'root',
    database: 'databaseMyBarTFG',
}; */


// ============================================================================== //
// MIDDLEWARES
// ============================================================================== //
// app.use(myconn(mysql, dbOpscions, 'single'));
// app.use(express.json());


// ============================================================================== //
// STARTING THE SERVER
// ============================================================================== //
app.listen(app.get('port'), () => {
    console.log('server runing on port', app.get('port'));
});


// ============================================================================== //
// ROUTES
// ============================================================================== //


// API //
// Todas las rutas a las llamadas de la API


// WEB //
// Todas las URL de la WEB que hacen las llamadas a los archivos .html


// Ruta principal [http://localhost:3000/]
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de myBar');
});

// Ruta tipo_usuarios [http://localhost:3000/tipo_usuarios]
// app.use('/tipo_usuarios', require('./routes/tipo_usuarios'));

// Ruta para mostrar index.html [http://localhost:3000/index_prueba]
app.get('/index_prueba', (req, res) => {
    res.sendFile(path.resolve(__dirname, './routes/web/index.html'));
});

// Ruta para mostrar el login up [http://localhost:3000/login]
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './routes/web/prueba/html/inicio/login copy.html'));
});

// Ruta para mostrar el registro [http://localhost:3000/registro]
app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './routes/web/prueba/html/inicio/registro copy.html'));
});


/*
// Ruta [http://localhost:3000/]
app.use('/bar', require('./routes/usuarios/creacion_de_usuarios'));

// Ruta [http://localhost:3000/]
app.use('/admin', require('./routes/usuarios/creacion_de_usuarios'));
*/



// RESPUESTAS - WEB //
// Todas las paginas de respuesta para cuando algo no funcione correctamente


// 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.resolve(__dirname, './routes/web/prueba/html/respuestas/404.html'));
});