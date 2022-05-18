// Ruta [http://localhost:3000/bar/crear_pedido]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO POST 
// ============================================================================== //
// Ruta [/]

// Crear pedido
// Agregar un nuevo pedido
routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('INSERT INTO pedidos set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Pedido agregado');
        });
    });
});


module.exports = routes