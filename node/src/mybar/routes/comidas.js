// Ruta comidas [http://localhost:3000/comidas]

const express = require('express');
const routes = express.Router();


// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Obtener todos los usuarios
routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM comidas', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

// Obtener un unico usuario
routes.get('/:id_comida', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM comidas WHERE id_comida = ?', [req.params.id_comida], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});


// ============================================================================== //
// METODO POST 
// ============================================================================== //
// Ruta [/]

// Agregar un nuevo usuario
routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('INSERT INTO comidas set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Comida agregada');
        });
    });
});


// ============================================================================== //
// METODO DELETE 
// ============================================================================== //
// Ruta [/]

// Borrar un usuario
routes.delete('/:id_comida', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('DELETE FROM comidas WHERE id_comida = ?', [req.params.id_comida], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Comida eliminada');
        });
    });
});


// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [/]

// Modificar un usuario
routes.put('/:id_comida', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE comidas set ? WHERE id_comida = ?', [req.body, req.params.id_comida], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Comida modificada!');
        });
    });
});


module.exports = routes