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

        conn.query('select pedidos.id_pedido, pedidos.preparado, pedidos.fecha_hora, tabla_bares.id_bar, tabla_bares.nombre, tabla_bares.direccion, tabla_bares.telefono, detalles_pedido.id_comida from pedidos left join tabla_bares on pedidos.id_bar = tabla_bares.id_bar left join detalles_pedido on pedidos.id_pedido = detalles_pedido.id_pedido order by id_pedido asc;', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

// Obtener un unico pedido
routes.get('/:id_pedido', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT pedidos.id_pedido, pedidos.preparado, pedidos.fecha_hora, tabla_bares.id_bar, tabla_bares.nombre, tabla_bares.direccion, tabla_bares.telefono, detalles_pedido.id_comida from pedidos left join tabla_bares on pedidos.id_bar = tabla_bares.id_bar left join detalles_pedido on pedidos.id_pedido = detalles_pedido.id_pedido WHERE pedidos.id_pedido = ?', [req.params.id_pedido], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });

        /*
        conn.query('select pedidos.id_pedido, pedidos.preparado, pedidos.fecha_hora, tabla_bares.id_bar, tabla_bares.nombre, tabla_bares.direccion, tabla_bares.telefono, detalles_pedido.id_comida from pedidos left join tabla_bares on pedidos.id_bar = tabla_bares.id_bar left join detalles_pedido on pedidos.id_pedido = detalles_pedido.id_pedido WHERE id_pedido = ?', [req.params.id_pedido], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
        */
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