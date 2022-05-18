// Ruta [http://localhost:3000/bar/pedidos]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Visualizar pedidos del bar
routes.get('/:id_bar', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT tabla_bares.id_bar, tabla_bares.nombre, usuario_pedidos.id_usuario_pedido, inf_usuarios.usuario, detalles_pedido.id_comida, comidas.comida, comidas.alergenos, comidas.precio, detalles_pedido.cantidad, pedidos.id_pedido, pedidos.preparado, pedidos.fecha_hora from usuario_pedidos left join inf_usuarios on usuario_pedidos.id_usuario = inf_usuarios.id_usuario left join pedidos on usuario_pedidos.id_pedido = pedidos.id_pedido left join tabla_bares on pedidos.id_bar = tabla_bares.id_bar left join detalles_pedido on pedidos.id_pedido = detalles_pedido.id_pedido left join comidas on detalles_pedido.id_comida = comidas.id_comida where tabla_bares.id_bar = ?', [req.params.id_bar], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

module.exports = routes