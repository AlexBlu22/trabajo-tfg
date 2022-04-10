-- ======================
-- BORRAR BBDD [NO TOCAR]
-- ======================

-- =========
-- FULL BBDD
-- =========
drop database if exists databaseMyBarTFG;

-- ======
-- TABLAS
-- ======

-- Usuarios

drop table if exists inf_usuarios;
drop table if exists tipo_usuarios;
drop table if exists permisos;

-- Bar

drop table if exists tabla_bares;
drop table if exists pedidos;
drop table if exists cartas;
drop table if exists menus;
drop table if exists contenido_menu;
drop table if exists comidas;

-- drop table if exists cobros;
