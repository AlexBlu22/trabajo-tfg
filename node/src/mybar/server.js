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





// API ORGANIZADA

// ========
// SESIONES
// ========

// Creacion de sesiones [ usuarios/bar ]
// Ruta [http://localhost:3000/sesion/creacion]
app.use('/sesion/creacion', require('./routes/sesiones/creacion_de_usuarios'));


// ========
// USUARIOS
// ========

// Mostrar la informacion del usuario
// Ruta [http://localhost:3000/usuario/informacion]
app.use('/usuario/informacion', require('./routes/usuarios/informacion_del_usuario'));

// Modificar la informacion del usuario
// Ruta [http://localhost:3000/usuario/edit_informacion]
app.use('/usuario/edit_informacion', require('./routes/usuarios/modificar_informacion_del_usuario'));

// Mostrar los bares
// Ruta [http://localhost:3000/bar/mostrar_bares]
app.use('/bar/mostrar_bares', require('./routes/usuarios/visualizacion_bares'));

// Crear pedido
// Ruta [http://localhost:3000/bar/crear_pedido]
app.use('/bar/crear_pedido', require('./routes/usuarios/crear_pedido'));

// Visualizar pedidos del usuario
// Ruta [http://localhost:3000/usuario/pedidos]
app.use('/usuario/pedidos', require('./routes/usuarios/pedidos_usuario'));


// =====
// BARES
// =====

// Mostrar la informacion del bar
// Ruta [http://localhost:3000/bar/informacion]
app.use('/bar/informacion', require('./routes/bares/informacion_del_bar'));

// Modificar la informacion del bar
// Ruta [http://localhost:3000/bar/edit_informacion]
app.use('/bar/edit_informacion', require('./routes/bares/modificacion_informacion_del_bar'));

// Visualizar pedidos del bar
// Ruta [http://localhost:3000/bar/pedidos]
app.use('/bar/pedidos', require('./routes/bares/pedidos_bar'));

// Modificar estado del pedidos
// Ruta [http://localhost:3000/bar/edit_pedido]
app.use('/bar/edit_pedido', require('./routes/bares/modificacion_pedido_bar'));

// Mostrar menu del bar
// Ruta [http://localhost:3000/bar/menu]
app.use('/bar/menu', require('./routes/bares/visualizacion_menu'));


// =============
// ADMINISTRADOR
// =============

// Creacion de las comidas de los bares
// Ruta [http://localhost:3000/bar/edit_menu]
app.use('/bar/comida_nueba', require('./routes/administrador/comida_nueba'));

// Modificacion de las comidas de los bares
// Ruta [http://localhost:3000/bar/edit_menu]
app.use('/bar/edit_menu', require('./routes/administrador/modificacion_comida'));

// Borrar las comidas de los bares
// Ruta [http://localhost:3000/bar/edit_menu]
app.use('', require('./routes/administrador/borrar_comida'));






/*
// Ruta [http://localhost:3000/]
app.use('/bar', require('./routes/usuarios/creacion_de_usuarios'));

// Ruta [http://localhost:3000/]
app.use('/admin', require('./routes/usuarios/creacion_de_usuarios'));
*/