// Este archivo de aqui sirve para la configuracion del Node.js

const express = require('express');
const app = express();
const mysql = require('mysql');
const myconn = require('express-myconnection');


// Settings
app.set('port', process.env.PORT || 3000);

const dbOpscions = {
    host: 'localhost',
    post: '3306',
    user: 'root',
    password: 'root',
    database: 'databaseMyBarTFG',
};


// Middlewares
app.use(myconn(mysql, dbOpscions, 'single'));
app.use(express.json());


// Starting the server
app.listen(app.get('port'), ()=>{
    console.log('server runing on port', app.get('port'));
});


// Routes

// Ruta principal [http://localhost:3000/]
app.get('/', (req, res) =>{
    res.send('Bienvenido a la API de myBar');
});

// Ruta inf_usuarios [http://localhost:3000/inf_usuarios]
app.use('/inf_usuarios', require('./routes/inf_usuarios'));

// Ruta inf_usuarios [http://localhost:3000/permisos]
app.use('/permisos', require('./routes/permisos'));
