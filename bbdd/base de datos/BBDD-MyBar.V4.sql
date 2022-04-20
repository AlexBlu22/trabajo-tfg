-- ====================================
-- Creacion de la BBDD databaseMyBarTFG
-- ====================================
create database databaseMyBarTFG;
use databaseMyBarTFG;

-- ======================
-- Creacion de las tablas
-- ======================

-- --------
-- Usuarios
-- --------

create table tipo_usuarios(
	id_tipo_usuario int unsigned not null auto_increment unique,
    tipo_usuario varchar(50) not null unique,
    
    -- primary key
    primary key (id_tipo_usuario)
    -- foreign key
);

create table inf_usuarios(
	id_usuario int unsigned not null auto_increment unique,
    usuario varchar(50) not null,
    correo varchar(50) not null unique,
    contrasena varchar(50) not null,
    id_tipo_usuario int unsigned not null,
	
    -- primary key
    primary key (id_usuario),
    -- foreign key
    foreign key (id_tipo_usuario) references tipo_usuarios (id_tipo_usuario)
);

create table permisos(
	id_permiso int unsigned not null auto_increment unique,
    permiso varchar(50),
    id_tipo_usuario int unsigned not null,
    
    -- primary key
    primary key (id_permiso),
    -- foreign key
    foreign key (id_tipo_usuario) references tipo_usuarios (id_tipo_usuario)
);



-- ---
-- Bar
-- ---

create table tabla_bares(
	id_bar int unsigned not null auto_increment unique,
    nombre varchar(50) not null unique,
    direccion varchar(100) not null,
    telefono int not null ,
    
    -- primary key
    primary key (id_bar)
    -- foreign key
);

create table comidas(
	id_comida int unsigned not null auto_increment unique,
    comida varchar(50) not null,
    alergenos mediumtext,
    precio decimal(3,2) unsigned not null,
    
    -- primary key
    primary key (id_comida)
    -- foreign key
);

create table menus(
	id_menu int unsigned not null auto_increment unique,
    menu varchar(50) not null,
    
    -- primary key
    primary key (id_menu)
    -- foreign key
);

create table contenido_menu(
	id_contenido_menu int unsigned not null auto_increment unique,
	id_menu int unsigned not null,
    id_comida int unsigned not null,
    
    -- primary key
    primary key (id_contenido_menu),
    -- foreign key
    foreign key (id_menu) references menus (id_menu),
    foreign key (id_comida) references comidas (id_comida)
);

create table cartas(
	id_carta int unsigned not null auto_increment unique,
    id_menu int unsigned not null,
    
    -- primary key
    primary key (id_carta),
    -- foreign key
    foreign key (id_menu) references menus (id_menu)
);

create table pedidos(
	id_pedido int unsigned not null auto_increment unique,
    fecha_hora datetime not null,
    preparado varchar(10),
    id_bar int unsigned not null,
    /* id_cobro int unsigned not null */
    
    -- primary key
    primary key (id_pedido),
    -- foreign key
    foreign key (id_bar) references tabla_bares (id_bar)
    /* foreign key (id_cobro) references cobros (id_cobro) */
);

create table detalles_pedido(
	id_detalles_pedido int unsigned not null auto_increment unique,
    cantidad int,
    id_pedido int unsigned not null,
    id_comida int unsigned not null,
    
    -- primary key
    primary key (id_detalles_pedido),
    -- foreign key
    foreign key (id_pedido) references pedidos (id_pedido),
    foreign key (id_comida) references comidas (id_comida)
);

create table usuario_pedidos(
	id_usuario_pedido int unsigned not null auto_increment unique,
    id_usuario int unsigned not null,
    id_pedido int unsigned not null,
    
    -- primary key
    primary key (id_usuario_pedido),
    -- foreign key
    foreign key (id_usuario) references inf_usuarios (id_usuario),
    foreign key (id_pedido) references pedidos (id_pedido)
);
-- Cobros
/*
create table cobros(
	id_cobro int unsigned not null auto_increment unique,
    numero_cuenta
    fecha_caducidad
    codigo_seguridad
    
    -- primary key
    primary key (id_comida)
    -- foreign key
);
*/