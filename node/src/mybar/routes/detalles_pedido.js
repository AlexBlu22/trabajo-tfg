// Ruta detalles_pedido [http://localhost:3000/detalles_pedido]

const express = require('express');
const routes = express.Router();


// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Obtener todos los detalles_pedido
routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM detalles_pedido', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

// Obtener un unico detalles_pedido
routes.get('/:id_detalles_pedido', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM detalles_pedido WHERE id_detalles_pedido = ?', [req.params.id_detalles_pedido], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});


// ============================================================================== //
// METODO POST 
// ============================================================================== //
// Ruta [/]

// Agregar un nuevo detalles_pedido
routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('INSERT INTO detalles_pedido set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Pedido agregado');
        });
    });
});


// ============================================================================== //
// METODO DELETE 
// ============================================================================== //
// Ruta [/]

// Borrar un detalles_pedido
routes.delete('/:id_detalles_pedido', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('DELETE FROM detalles_pedido WHERE id_detalles_pedido = ?', [req.params.id_detalles_pedido], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Pedido eliminado');
        });
    });
});


// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [/]

// Modificar un detalles_pedido
routes.put('/:id_detalles_pedido', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE detalles_pedido set ? WHERE id_detalles_pedido = ?', [req.body, req.params.id_detalles_pedido], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Pedido modificado!');
        });
    });
});


module.exports = routes