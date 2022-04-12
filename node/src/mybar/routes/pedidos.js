// Ruta pedidos [http://localhost:3000/pedidos]

const express = require('express');
const routes = express.Router();


// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Obtener todos los pedidos
routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM pedidos', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

// Obtener un unico pedido
routes.get('/:id_pedido', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM pedidos WHERE id_pedido = ?', [req.params.id_pedido], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});


// ============================================================================== //
// METODO POST 
// ============================================================================== //
// Ruta [/]

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


// ============================================================================== //
// METODO DELETE 
// ============================================================================== //
// Ruta [/]

// Borrar un bar
routes.delete('/:id_pedido', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('DELETE FROM pedidos WHERE id_pedido = ?', [req.params.id_pedido], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Pedido eliminado');
        });
    });
});


// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [/]

// Modificar un bar
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