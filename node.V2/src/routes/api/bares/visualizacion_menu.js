// Ruta [http://localhost:3000/bar/menu]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Obtener menu del bar
routes.get('/:id_bar', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT tabla_bares.id_bar, tabla_bares.nombre, tabla_bares.direccion, tabla_bares.telefono, detalles_pedido.id_comida, comidas.comida, comidas.alergenos, comidas.precio from pedidos left join tabla_bares on pedidos.id_bar = tabla_bares.id_bar left join detalles_pedido on pedidos.id_pedido = detalles_pedido.id_pedido left join comidas on detalles_pedido.id_comida = comidas.id_comida where tabla_bares.id_bar = ?', [req.params.id_bar], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

module.exports = routes