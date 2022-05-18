// Este archivo de aqui sirve para la configuracion del Node.js

const express = require('express');
const app = express();
const mysql = require('mysql');
const myconn = require('express-myconnection');
const req = require('express/lib/request');
const path = require('path');

app.use(express.static(__dirname + "/routes/web/prueba/public"));


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

// Ruta tipo_usuarios [http://localhost:3000/tipo_usuarios]
// app.use('/tipo_usuarios', require('./routes/tipo_usuarios'));

// Ruta inf_usuarios [http://localhost:3000/inf_usuarios]
// app.use('/inf_usuarios', require('./routes/inf_usuarios'));

// Ruta permisos [http://localhost:3000/permisos]
// app.use('/permisos', require('./routes/permisos'));

// Ruta tabla_bares [http://localhost:3000/tabla_bares]
// app.use('/tabla_bares', require('./routes/tabla_bares'));

// Ruta pedidos [http://localhost:3000/pedidos]
// app.use('/pedidos', require('./routes/pedidos'));

// Ruta detalles_pedido [http://localhost:3000/detalles_pedido]
// app.use('/detalles_pedido', require('./routes/detalles_pedido'));

// Ruta comidas [http://localhost:3000/comidas]
// app.use('/comidas', require('./routes/comidas'));

// Ruta menus [http://localhost:3000/menus]
// app.use('/menus', require('./routes/menus'));

// Ruta contenido_menu [http://localhost:3000/contenido_menu]
// app.use('/contenido_menu', require('./routes/contenido_menu'));

// Ruta cartas [http://localhost:3000/cartas]
// app.use('/cartas', require('./routes/cartas'));




// API ORGANIZADA

// ========
// SESIONES
// ========
// Ruta [http://localhost:3000/sesiones/login]
app.use('/sesiones/login', require('./routes/sesiones/login'));

// Creacion de sesiones [ usuarios/bar ]
// Ruta [http://localhost:3000/sesiones/creacion_de_usuarios]
app.use('/sesiones/creacion_de_usuarios', require('./routes/sesiones/creacion_de_usuarios'));


// ========
// USUARIOS
// ========

// Mostrar la informacion del usuario
// Ruta [http://localhost:3000/usuarios/informacion_del_usuario]
app.use('/usuarios/informacion_del_usuario', require('./routes/usuarios/informacion_del_usuario'));

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
// Ruta [http://localhost:3000/usuarios/pedidos]
app.use('/usuarios/pedidos', require('./routes/usuarios/pedidos_usuario'));


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

// Crear nuevo menu
// Ruta [http://localhost:3000/bar/menu_crear]
app.use('/bar/menu_crear', require('./routes/bares/menu_nuevo'));


// =============
// ADMINISTRADOR
// =============

// Listado de las comidas
// Ruta [http://localhost:3000/comida]
app.use('/comida', require('./routes/administrador/listado_comidas'));

// Creacion de las comidas de los bares
// Ruta [http://localhost:3000/comida/crear]
app.use('/comida/crear', require('./routes/administrador/comida_nueba'));

// Modificacion de las comidas de los bares
// Ruta [http://localhost:3000/comida/editar]
app.use('/comida/editar', require('./routes/administrador/modificacion_comida'));

// Borrar las comidas de los bares
// Ruta [http://localhost:3000/comida/borrar]
app.use('/comida/borrar', require('./routes/administrador/borrar_comida'));


// ===============
// FUNCIONALIDADES
// ===============

// Busquedas
// Ruta [http://localhost:3000/busqueda]
app.use('/busqueda', require('./routes/funcionalidades/busqueda'));





// Esta parte no me acuerdo si valia o no [ comprobar ]

/*
// Ruta [http://localhost:3000/]
app.use('/bar', require('./routes/usuarios/creacion_de_usuarios'));

// Ruta [http://localhost:3000/]
app.use('/admin', require('./routes/usuarios/creacion_de_usuarios'));
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
