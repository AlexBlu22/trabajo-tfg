show databases;

-- ==================
-- Mostrar las tablas
-- ==================

-- --------
-- Usuarios
-- --------
select * from inf_usuarios;
select * from tipo_usuarios;
select * from permisos;

select permisos.id_permiso, permisos.permiso, tipo_usuarios.id_tipo_usuario, tipo_usuarios.tipo_usuario from permisos 
  left join tipo_usuarios on permisos.id_tipo_usuario = tipo_usuarios.id_tipo_usuario;
  
select inf_usuarios.usuario, inf_usuarios.correo, inf_usuarios.contrasena, tipo_usuarios.id_tipo_usuario, tipo_usuarios.tipo_usuario, permisos.id_permiso, permisos.permiso from inf_usuarios 
	left join tipo_usuarios on inf_usuarios.id_tipo_usuario = tipo_usuarios.id_tipo_usuario
    left join permisos on tipo_usuarios.id_tipo_usuario = permisos.id_permiso;

-- ---
-- Bar
-- ---

select * from pedidos;
select * from tabla_bares;
select * from detalles_pedido;
select * from cartas;
select * from menus;
select * from contenido_menu;
select * from comidas;

select pedidos.id_pedido, pedidos.preparado, pedidos.fecha_hora, tabla_bares.id_bar, tabla_bares.nombre, tabla_bares.direccion, tabla_bares.telefono
	from pedidos left join tabla_bares on pedidos.id_bar = tabla_bares.id_bar;
                 
SELECT pedidos.id_pedido, pedidos.preparado, pedidos.fecha_hora, tabla_bares.id_bar, tabla_bares.nombre, tabla_bares.direccion, tabla_bares.telefono, detalles_pedido.id_comida 
	from pedidos left join tabla_bares on pedidos.id_bar = tabla_bares.id_bar 
				 left join detalles_pedido on pedidos.id_pedido = detalles_pedido.id_pedido ;