// Este archivo de aqui sirve para la configuracion del Node.js

const express = require('express');
const app = express();
const mysql = require('mysql');
const myconn = require('express-myconnection');


// ============================================================================== //
// SETTINGS
// ============================================================================== //
app.set('port', process.env.PORT || 3000);

const dbOpscions = {
    host: 'localhost',
    post: '3306',
    user: 'root',
    password: 'root',
    database: 'databaseMyBarTFG',
};


// ============================================================================== //
// MIDDLEWARES
// ============================================================================== //
app.use(myconn(mysql, dbOpscions, 'single'));
app.use(express.json());


// ============================================================================== //
// STARTING THE SERVER
// ============================================================================== //
app.listen(app.get('port'), ()=>{
    console.log('server runing on port', app.get('port'));
});


// ============================================================================== //
// ROUTES
// ============================================================================== //

// Ruta principal [http://localhost:3000/]
app.get('/', (req, res) =>{
    res.send('Bienvenido a la API de myBar');
});

// Ruta tipo_usuarios [http://localhost:3000/tipo_usuarios]
app.use('/tipo_usuarios', require('./routes/tipo_usuarios'));

// Ruta inf_usuarios [http://localhost:3000/inf_usuarios]
app.use('/inf_usuarios', require('./routes/inf_usuarios'));

// Ruta permisos [http://localhost:3000/permisos]
app.use('/permisos', require('./routes/permisos'));

// Ruta tabla_bares [http://localhost:3000/tabla_bares]
app.use('/tabla_bares', require('./routes/tabla_bares'));

// Ruta pedidos [http://localhost:3000/pedidos]
app.use('/pedidos', require('./routes/pedidos'));

// Ruta detalles_pedido [http://localhost:3000/detalles_pedido]
app.use('/detalles_pedido', require('./routes/detalles_pedido'));

// Ruta comidas [http://localhost:3000/comidas]
app.use('/comidas', require('./routes/comidas'));

// Ruta menus [http://localhost:3000/menus]
app.use('/menus', require('./routes/menus'));

// Ruta contenido_menu [http://localhost:3000/contenido_menu]
app.use('/contenido_menu', require('./routes/contenido_menu'));

// Ruta cartas [http://localhost:3000/cartas]
app.use('/cartas', require('./routes/cartas'));

// Ruta busqueda [http://localhost:3000/busqueda]
app.use('/busqueda', require('./routes/busqueda'));