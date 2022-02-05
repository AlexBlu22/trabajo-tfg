-- 1. Creaciones

drop database if exists Tdg_bd;
create database Tdg_bd;
use Tdg_bd;

-- Creación de la tabla Usuarios.
drop table if exists Login;
create table Login(
id_login int unsigned auto_increment not null,
Usurio varchar(20) not null,
Contraseña varchar(20) not null,
primary key (id_login)
);

-- Inserte los siguientes valores
insert into Login (id_login,Usurio,Contraseña) values (1,'Aleje99', 'qwerty');

-- Creación de la tabla Usuarios.
drop table if exists Sign_up;
create table Sign_up(
id_usuarios int unsigned auto_increment not null,
Usurio varchar(20) not null,
correo varchar(20) not null,
Contraseña varchar(20) not null,
tarjeta int not null,
primary key (id_usuarios),
constraint 'fk_usuarios'
	foreign key ('Usuario')
    references 'login' ('Usuario')
);






