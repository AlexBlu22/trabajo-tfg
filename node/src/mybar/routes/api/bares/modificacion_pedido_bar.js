// Ruta [http://localhost:3000/bar/edit_pedido]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [/]

// Modificar estado del pedidos
routes.put('/:id_pedido', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE pedidos set ? WHERE id_pedido = ?', [req.body, req.params.id_pedido], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Pedido modificado!');
        });
    });
});

module.exports = routes