-- ===========================
-- Crear los valores primarios
-- ===========================

-- [Administrador]
insert into tipo_usuarios (id_tipo_usuario, tipo_usuario) values (1, 'Administrador');
insert into tipo_usuarios (id_tipo_usuario, tipo_usuario) values (2, 'Camarero');
insert into tipo_usuarios (id_tipo_usuario, tipo_usuario) values (3, 'Cliente');
insert into inf_usuarios (id_usuario, usuario, correo, contrasena, id_tipo_usuario) values (1, 'Admin_01', 'admin@admin.com', 'admin', '1');

insert into permisos (id_permiso, permiso, id_tipo_usuario) values (1, 'Leer', '1');
