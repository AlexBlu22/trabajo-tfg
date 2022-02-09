---------------------------------------
-- BORRADORES [MUCHO OJO] --
---------------------------------------
/*
drop database if exists TFG_bbdd;
drop table if exists Inf_Login;
drop table if exists Inf_Usuarios;
drop table if exists Inf_Pedido;
drop table if exists Inf_Bar;
drop table if exists Inf_Localizacion;
drop table if exists Inf_Carta;
drop table if exists Inf_Bebidas;
drop table if exists Inf_Platos;
drop table if exists Inf_Postres;
*/

---------------------------------------
-- Creacion de la base [TFG_bbdd] --
---------------------------------------

-- Base de Datos TFG --
create database TFG_bbdd;
use TFG_bbdd;

---------------------------------------
-- Login --
---------------------------------------

-- Tabla Login --
create table Inf_Login(
    id_usuario ,
    id_bar 

    -- Correlaciones --
);

---------------------------------------
-- Usuarios --
---------------------------------------

-- Tabla usuarios --
create table Inf_Usuarios(
    id_usuario int unsigned not null auto_increment unique,
    usuario varchar(50),
    correo varchar(100),
    contrasena varchar(100),
    pedido int

    -- Correlaciones --
);

-- Tabla pedidios --
create table Inf_Pedido(
    id_pedido int unsigned not null auto_increment unique,
    pedido ,
    mesa ,
    bar

    -- Correlaciones --
);

/*
-- Tabla Tarjeta pago --
drop table if exists Inf_Tarjeta_pago;
create table Inf_Tarjeta_pago(
    id_tarjeta_pago ,
    numero_tarjeta_20 ,
    codigo_seguridad_3 ,
    fecha_caducidad_4
);
*/

---------------------------------------
-- Bar --
---------------------------------------

-- Tabla Bar --
create table Inf_Bar(
    id_bar int unsigned not null auto_increment unique,
    bar varchar(100),
    localizacion int not null,
    num_mesas int not null,
    carta int not null,
    pedido int

    -- Correlaciones --
);

-- Tabla Localizacion --
create table Inf_Localizacion(
    id_localizacion int unsigned not null auto_increment unique,
    pais varchar(50),
    ciudad varchar(50),
    calle varchar(50),
    numero int

    -- Correlaciones --
);

-- Tabla Carta --
create table Inf_Carta(
    id_carta int unsigned not null auto_increment unique,
    carta varchar(50),
    bebidas int not null,
    platos int not null,
    postres int,
    precios int

    -- Correlaciones --
);

-- Tabla Bebidas --
create table Inf_Bebidas(
    id_bebida int unsigned not null auto_increment unique,
    bebida varchar(50) not null,
    precio int not null

    -- Correlaciones --
);

-- Tabla Platos --
create table Inf_Platos(
    id_plato int unsigned not null auto_increment unique,
    plato varchar(50) not null,
    descripcion mediumtext,
    alergenos mediumtext,
    precio int not null

    -- Correlaciones --
);

-- Tabla Postres --
create table Inf_Postres(
    id_postre int unsigned not null auto_increment unique,
    postre varchar(50) not null,
    descripcion mediumtext,
    alergenos mediumtext,
    precio int not null

    -- Correlaciones --
);

/*
-- Tabla Cobros --
drop table if exists Inf_Cobros;
create table Inf_Cobros(
    id_cobro ,
    numero_cuenta
);
*/
