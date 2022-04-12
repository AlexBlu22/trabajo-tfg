-- =================
-- Crear los valores
-- =================

-- --------
-- Usuarios
-- --------

-- tipo_usuarios
insert into tipo_usuarios (id_tipo_usuario, tipo_usuario) values (1, 'Administrador');
insert into tipo_usuarios (id_tipo_usuario, tipo_usuario) values (2, 'Camarero');
insert into tipo_usuarios (id_tipo_usuario, tipo_usuario) values (3, 'Cliente');

-- inf_usuarios
insert into inf_usuarios (id_usuario, usuario, correo, contrasena, id_tipo_usuario) values (1, 'Flor', 'freuss0@timesonline.co.uk', '61601-1120', 1);
insert into inf_usuarios (id_usuario, usuario, correo, contrasena, id_tipo_usuario) values (2, 'Ruthi', 'rbettley1@go.com', '42192-331', 1);
insert into inf_usuarios (id_usuario, usuario, correo, contrasena, id_tipo_usuario) values (3, 'June', 'jlarkworthy2@prnewswire.com', '49999-449', 2);
insert into inf_usuarios (id_usuario, usuario, correo, contrasena, id_tipo_usuario) values (4, 'Bradney', 'bvermer3@noaa.gov', '24794-225', 2);
insert into inf_usuarios (id_usuario, usuario, correo, contrasena, id_tipo_usuario) values (5, 'Zebulon', 'zcampana4@mozilla.com', '63323-101', 2);
insert into inf_usuarios (id_usuario, usuario, correo, contrasena, id_tipo_usuario) values (6, 'Hyacinth', 'hhurlston5@omniture.com', '51009-206', 2);
insert into inf_usuarios (id_usuario, usuario, correo, contrasena, id_tipo_usuario) values (7, 'Jordain', 'jcashmore6@php.net', '65862-560', 3);
insert into inf_usuarios (id_usuario, usuario, correo, contrasena, id_tipo_usuario) values (8, 'Chelsae', 'cclurow7@howstuffworks.com', '48951-1173', 3);
insert into inf_usuarios (id_usuario, usuario, correo, contrasena, id_tipo_usuario) values (9, 'Gabe', 'gwark8@e-recht24.de', '76420-481', 3);
insert into inf_usuarios (id_usuario, usuario, correo, contrasena, id_tipo_usuario) values (10, 'Shandeigh', 'skift9@imageshack.us', '59898-401', 3);

-- permisos
/*
insert into permisos (id_permiso, permiso, id_tipo_usuario) values (1, '', '');
insert into permisos (id_permiso, permiso, id_tipo_usuario) values (1, '', '');
insert into permisos (id_permiso, permiso, id_tipo_usuario) values (1, '', '');
insert into permisos (id_permiso, permiso, id_tipo_usuario) values (1, '', '');
insert into permisos (id_permiso, permiso, id_tipo_usuario) values (1, '', '');
insert into permisos (id_permiso, permiso, id_tipo_usuario) values (1, '', '');
insert into permisos (id_permiso, permiso, id_tipo_usuario) values (1, '', '');
insert into permisos (id_permiso, permiso, id_tipo_usuario) values (1, '', '');
insert into permisos (id_permiso, permiso, id_tipo_usuario) values (1, '', '');
insert into permisos (id_permiso, permiso, id_tipo_usuario) values (1, '', '');
*/


-- ---
-- Bar
-- ---

-- tabla_bares
insert into tabla_bares (id_bar, nombre, direccion) values (1, 'CorEnergy Infrastructure Trust, Inc.', 'Sommers');
insert into tabla_bares (id_bar, nombre, direccion) values (2, 'Reading International Inc', '4th');
insert into tabla_bares (id_bar, nombre, direccion) values (3, 'Pimco Municipal Income Fund II', 'Dakota');
insert into tabla_bares (id_bar, nombre, direccion) values (4, 'Annaly Capital Management Inc', 'West');
insert into tabla_bares (id_bar, nombre, direccion) values (5, 'EnteroMedics Inc.', 'Evergreen');
insert into tabla_bares (id_bar, nombre, direccion) values (6, 'Lions Gate Entertainment Corporation', 'Forest Dale');
insert into tabla_bares (id_bar, nombre, direccion) values (7, 'Citizens First Corporation', 'Leroy');
insert into tabla_bares (id_bar, nombre, direccion) values (8, 'AmTrust Financial Services, Inc.', 'Anderson');
insert into tabla_bares (id_bar, nombre, direccion) values (9, 'National Research Corporation', 'School');
insert into tabla_bares (id_bar, nombre, direccion) values (10, 'HNI Corporation', 'Northfield');

-- comidas
insert into comidas (id_comida, comida, alergenos, precio) values (1, 'macarrones', 'contiene gluten', '8.35');
insert into comidas (id_comida, comida, alergenos, precio) values (2, 'sopa', 'puede contener huevo', '9.28');
insert into comidas (id_comida, comida, alergenos, precio) values (3, 'macarrones', 'puede contener huevo', '9.89');
insert into comidas (id_comida, comida, alergenos, precio) values (4, 'chuletas', 'puede contener mostaza', '9.11');
insert into comidas (id_comida, comida, alergenos, precio) values (5, 'sopa', 'puede contener huevo', '4.52');
insert into comidas (id_comida, comida, alergenos, precio) values (6, 'chuletas', 'puede contener huevo', '6.25');
insert into comidas (id_comida, comida, alergenos, precio) values (7, 'chuletas', 'contiene gluten', '4.10');
insert into comidas (id_comida, comida, alergenos, precio) values (8, 'chuletas', 'puede contener huevo', '8.71');
insert into comidas (id_comida, comida, alergenos, precio) values (9, 'chuletas', 'puede contener huevo', '4.32');
insert into comidas (id_comida, comida, alergenos, precio) values (10, 'chuletas', 'contiene gluten', '6.93');

-- menus
-- contenido_menu
-- cartas

-- pedidos
insert into pedidos (id_pedido, fecha_hora, preparado, id_bar) values (1, '2022-4-26 12:30', 'no', 9);
insert into pedidos (id_pedido, fecha_hora, preparado, id_bar) values (2, '2022-4-27 12:30', 'no', 4);
insert into pedidos (id_pedido, fecha_hora, preparado, id_bar) values (3, '2022-4-28 12:30', 'si', 9);
insert into pedidos (id_pedido, fecha_hora, preparado, id_bar) values (4, '2022-4-29 12:30', 'si', 9);
insert into pedidos (id_pedido, fecha_hora, preparado, id_bar) values (5, '2022-4-30 12:30', 'si', 9);
insert into pedidos (id_pedido, fecha_hora, preparado, id_bar) values (6, '2022-5-1 12:30', 'si', 7);
insert into pedidos (id_pedido, fecha_hora, preparado, id_bar) values (7, '2022-5-2 12:30', 'no', 1);
insert into pedidos (id_pedido, fecha_hora, preparado, id_bar) values (8, '2022-5-3 12:30', 'no', 7);
insert into pedidos (id_pedido, fecha_hora, preparado, id_bar) values (9, '2022-5-4 12:30', 'no', 8);
insert into pedidos (id_pedido, fecha_hora, preparado, id_bar) values (10, '2022-5-5 12:30', 'no', 6);

-- detalles_pedido
insert into detalles_pedido (id_detalles_pedido, cantidad, id_bar, id_comida) values (1, 2, 7, 6);
insert into detalles_pedido (id_detalles_pedido, cantidad, id_bar, id_comida) values (2, 2, 7, 5);
insert into detalles_pedido (id_detalles_pedido, cantidad, id_bar, id_comida) values (3, 3, 9, 6);
insert into detalles_pedido (id_detalles_pedido, cantidad, id_bar, id_comida) values (4, 1, 5, 6);
insert into detalles_pedido (id_detalles_pedido, cantidad, id_bar, id_comida) values (5, 1, 4, 9);
insert into detalles_pedido (id_detalles_pedido, cantidad, id_bar, id_comida) values (6, 2, 8, 5);
insert into detalles_pedido (id_detalles_pedido, cantidad, id_bar, id_comida) values (7, 1, 8, 8);
insert into detalles_pedido (id_detalles_pedido, cantidad, id_bar, id_comida) values (8, 3, 4, 2);
insert into detalles_pedido (id_detalles_pedido, cantidad, id_bar, id_comida) values (9, 3, 7, 1);
insert into detalles_pedido (id_detalles_pedido, cantidad, id_bar, id_comida) values (10, 2, 9, 7);
