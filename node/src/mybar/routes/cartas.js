// Ruta cartas [http://localhost:3000/cartas]

const express = require('express');
const routes = express.Router();


// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Obtener todos los carta
routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM cartas', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

// Obtener un unico carta
routes.get('/:id_carta', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM cartas WHERE id_carta = ?', [req.params.id_carta], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});


// ============================================================================== //
// METODO POST 
// ============================================================================== //
// Ruta [/]

// Agregar un nuevo cartas
routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('INSERT INTO cartas set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('cartas agregado');
        });
    });
});


// ============================================================================== //
// METODO DELETE 
// ============================================================================== //
// Ruta [/]

// Borrar un cartas
routes.delete('/:id_carta', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('DELETE FROM cartas WHERE id_carta = ?', [req.params.id_carta], (err, rows)=>{
            if(err) return res.send(err);

            res.send('cartas eliminado');
        });
    });
});


// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [/]

// Modificar un cartas
routes.put('/:id_carta', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE cartas set ? WHERE id_carta = ?', [req.body, req.params.id_carta], (err, rows)=>{
            if(err) return res.send(err);

            res.send('cartas modificado!');
        });
    });
});


module.exports = routes