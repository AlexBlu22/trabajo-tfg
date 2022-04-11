// Ruta permisos [http://localhost:3000/tabla_bares]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Obtener todos los bares
routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM tabla_bares', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

// Obtener un unico bar
routes.get('/:id_bar', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM tabla_bares WHERE id_bar = ?', [req.params.id_bar], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});


// ============================================================================== //
// METODO POST 
// ============================================================================== //
// Ruta [/]

// Agregar un nuevo bar
routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('INSERT INTO tabla_bares set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Bar agregado');
        });
    });
});


// ============================================================================== //
// METODO DELETE 
// ============================================================================== //
// Ruta [/]

// Borrar un bar
routes.delete('/:id_bar', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('DELETE FROM tabla_bares WHERE id_bar = ?', [req.params.id_bar], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Bar eliminado');
        });
    });
});


// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [/]

// Modificar un bar
routes.put('/:id_bar', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE tabla_bares set ? WHERE id_bar = ?', [req.body, req.params.id_bar], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Bar modificado!');
        });
    });
});


module.exports = routes