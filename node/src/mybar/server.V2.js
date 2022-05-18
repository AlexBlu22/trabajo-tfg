// Este archivo de aqui sirve para la configuracion del Node.js

const express = require('express');
const app = express();
const mysql = require('mysql');
const myconn = require('express-myconnection');
const req = require('express/lib/request');
const path = require('path');

app.use(express.static(__dirname + "/routes/views/public"));


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


// ========= //
//    WEB    //
// ========= //

// Todas las rutas a las llamadas http


// =========
// PRINCIPAL
// =========

// Ruta principal [http://localhost:3000/myBar]
app.get('/myBar', (req, res) => {
    res.sendFile(path.resolve(__dirname, './routes/views/html/web/index.html'));
});



// ================
// LOGIN / REGISTRO
// ================

// Ruta para el login [http://localhost:3000/myBar/login]

// Ruta para el registro [http://localhost:3000/myBar/registro]



// ========
// USUARIOS
// ========

// Ruta para la pagina principal del usuario [http://localhost:3000/myBar/usuario]


// Ruta para visualizar todos los bares [http://localhost:3000/myBar/usuario/bares]

// Ruta para visualizar la informacion del bar [http://localhost:3000/myBar/usuario/bares/informacion]


// Ruta para visualizar los pedidos del usuario [http://localhost:3000/myBar/usuario/pedidos_usuario]


// Ruta para la configuracion del usuario [http://localhost:3000/myBar/usuario/configuracion_usuario]



// =====
// BARES
// =====

// Ruta para la pagina principal del bar [http://localhost:3000/myBar/bar]


// Ruta para la pagina de pedidos entrantes del bar [http://localhost:3000/myBar/bar/pedidos_entrantes]

// Ruta para la pagina modificar el estado del pedido [http://localhost:3000/myBar/bar/pedidos_entrantes/estado_pedido]


// Ruta para la pagina de configuracion del menu del bar [http://localhost:3000/myBar/bar/configuracion_menu]

// Ruta para la pagina de anadir comidas al menu [http://localhost:3000/myBar/bar/configuracion_menu/anadir_comidas]


// Ruta para la pagina de configuracion del bar [http://localhost:3000/myBar/bar/configuracion_bar]



// =============
// ADMINISTRADOR
// =============

// Ruta para la pagina principal del administrador [http://localhost:3000/myBar/administrador]


// Ruta para la creacion de comidas [http://localhost:3000/myBar/administrador/crear_comida]


// Ruta para la visualizacion de todas las comidas [http://localhost:3000/myBar/administrador/visualizar_comidas]


// Ruta para la creacion de usuarios bar [http://localhost:3000/myBar/administrador/anadir_usuario_bar]




// ========= //
//    API    //
// ========= //

// Todas las rutas a las llamadas de la API

// Ruta principal [http://localhost:3000/api]
app.get('/api', (req, res) =>{
    res.send('Bienvenido a la API de myBar');
});


// ========
// SESIONES
// ========

// Creacion de sesiones [ usuarios/bar ]
// Ruta [http://localhost:3000/sesion/creacion]
app.use('/sesion/creacion', require('./routes/api/sesiones/creacion_de_usuarios'));



// ========
// USUARIOS
// ========

// Mostrar la informacion del usuario
// Ruta [http://localhost:3000/usuario/informacion]
app.use('/usuario/informacion', require('./routes/api/usuarios/informacion_del_usuario'));

// Modificar la informacion del usuario
// Ruta [http://localhost:3000/usuario/edit_informacion]
app.use('/usuario/edit_informacion', require('./routes/api/usuarios/modificar_informacion_del_usuario'));

// Mostrar los bares
// Ruta [http://localhost:3000/bar/mostrar_bares]
app.use('/bar/mostrar_bares', require('./routes/api/usuarios/visualizacion_bares'));

// Crear pedido
// Ruta [http://localhost:3000/bar/crear_pedido]
app.use('/bar/crear_pedido', require('./routes/api/usuarios/crear_pedido'));

// Visualizar pedidos del usuario
// Ruta [http://localhost:3000/usuario/pedidos]
app.use('/usuario/pedidos', require('./routes/api/usuarios/pedidos_usuario'));



// =====
// BARES
// =====

// Mostrar la informacion del bar
// Ruta [http://localhost:3000/bar/informacion]
app.use('/bar/informacion', require('./routes/api/bares/informacion_del_bar'));

// Modificar la informacion del bar
// Ruta [http://localhost:3000/bar/edit_informacion]
app.use('/bar/edit_informacion', require('./routes/api/bares/modificacion_informacion_del_bar'));

// Visualizar pedidos del bar
// Ruta [http://localhost:3000/bar/pedidos]
app.use('/bar/pedidos', require('./routes/api/bares/pedidos_bar'));

// Modificar estado del pedidos
// Ruta [http://localhost:3000/bar/edit_pedido]
app.use('/bar/edit_pedido', require('./routes/api/bares/modificacion_pedido_bar'));

// Mostrar menu del bar
// Ruta [http://localhost:3000/bar/menu]
app.use('/bar/menu', require('./routes/api/bares/visualizacion_menu'));

// Crear nuevo menu
// Ruta [http://localhost:3000/bar/menu_crear]
app.use('/bar/menu_crear', require('./routes/api/bares/menu_nuevo'));



// =============
// ADMINISTRADOR
// =============

// Listado de las comidas
// Ruta [http://localhost:3000/comida]
app.use('/comida', require('./routes/api/administrador/listado_comidas'));

// Creacion de las comidas de los bares
// Ruta [http://localhost:3000/comida/crear]
app.use('/comida/crear', require('./routes/api/administrador/comida_nueba'));

// Modificacion de las comidas de los bares
// Ruta [http://localhost:3000/comida/editar]
app.use('/comida/editar', require('./routes/api/administrador/modificacion_comida'));

// Borrar las comidas de los bares
// Ruta [http://localhost:3000/comida/borrar]
app.use('/comida/borrar', require('./routes/api/administrador/borrar_comida'));



// ===============
// FUNCIONALIDADES
// ===============

// Busquedas
// Ruta [http://localhost:3000/busqueda]
app.use('/busqueda', require('./routes/api/funcionalidades/busqueda'));




// Esta parte no me acuerdo si valia o no [ comprobar ]

/*
// Ruta [http://localhost:3000/]
app.use('/bar', require('./routes/api/usuarios/creacion_de_usuarios'));

// Ruta [http://localhost:3000/]
app.use('/admin', require('./routes/api/usuarios/creacion_de_usuarios'));
*/




// ================ //
// RESPUESTAS - WEB //
// ================ //

// Todas las paginas de respuesta para cuando algo no funcione correctamente


// 404
/*
app.use((req, res, next) => {
    res.status(404).sendFile(path.resolve(__dirname, './routes/web/prueba/html/respuestas/404.html'));
});
*/