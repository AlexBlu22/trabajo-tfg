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
select * from usuario_pedidos;

SELECT usuario_pedidos.id_usuario_pedido, inf_usuarios.usuario, tabla_bares.id_bar, tabla_bares.nombre, detalles_pedido.id_comida, comidas.comida, comidas.alergenos, comidas.precio, detalles_pedido.cantidad, pedidos.id_pedido, pedidos.preparado, pedidos.fecha_hora 
	from usuario_pedidos left join inf_usuarios on usuario_pedidos.id_usuario = inf_usuarios.id_usuario 
						 left join pedidos on usuario_pedidos.id_pedido = pedidos.id_pedido
						 left join tabla_bares on pedidos.id_bar = tabla_bares.id_bar 
						 left join detalles_pedido on pedidos.id_pedido = detalles_pedido.id_pedido
						 left join comidas on detalles_pedido.id_comida = comidas.id_comida where inf_usuarios.id_usuario = 1;

SELECT contenido_menu.id_menu, contenido_menu.id_comida, menus.menu, comidas.comida, comidas.alergenos, comidas.precio 
	from contenido_menu left join menus on contenido_menu.id_menu = menus.id_menu 
				 left join comidas on contenido_menu.id_comida = comidas.id_comida;

select pedidos.id_pedido, pedidos.preparado, pedidos.fecha_hora, tabla_bares.id_bar, tabla_bares.nombre, tabla_bares.direccion, tabla_bares.telefono
	from pedidos left join tabla_bares on pedidos.id_bar = tabla_bares.id_bar;
                 
SELECT pedidos.id_pedido, pedidos.preparado, pedidos.fecha_hora, tabla_bares.id_bar, tabla_bares.nombre, tabla_bares.direccion, tabla_bares.telefono, detalles_pedido.id_comida 
	from pedidos left join tabla_bares on pedidos.id_bar = tabla_bares.id_bar 
				 left join detalles_pedido on pedidos.id_pedido = detalles_pedido.id_pedido;

SELECT tabla_bares.id_bar, tabla_bares.nombre, tabla_bares.direccion, tabla_bares.telefono, detalles_pedido.id_comida, comidas.comida, comidas.alergenos, comidas.precio 
	from pedidos left join tabla_bares on pedidos.id_bar = tabla_bares.id_bar 
				 left join detalles_pedido on pedidos.id_pedido = detalles_pedido.id_pedido
                 left join comidas on detalles_pedido.id_comida = comidas.id_comida where tabla_bares.id_bar =1 ;
		
SELECT tabla_bares.id_bar, tabla_bares.nombre, usuario_pedidos.id_usuario_pedido, inf_usuarios.usuario, detalles_pedido.id_comida, comidas.comida, comidas.alergenos, comidas.precio, detalles_pedido.cantidad, pedidos.id_pedido, pedidos.preparado, pedidos.fecha_hora 
	from usuario_pedidos left join inf_usuarios on usuario_pedidos.id_usuario = inf_usuarios.id_usuario 
						 left join pedidos on usuario_pedidos.id_pedido = pedidos.id_pedido
						 left join tabla_bares on pedidos.id_bar = tabla_bares.id_bar 
						 left join detalles_pedido on pedidos.id_pedido = detalles_pedido.id_pedido
						 left join comidas on detalles_pedido.id_comida = comidas.id_comida where tabla_bares.id_bar = 2;