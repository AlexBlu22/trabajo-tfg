// Ruta contenido_menu [http://localhost:3000/contenido_menu]

const express = require('express');
const routes = express.Router();


// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Obtener todos los contenido_menu
routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM contenido_menu', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

// Obtener un unico contenido_menu
routes.get('/:id_contenido_menu', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM contenido_menu WHERE id_contenido_menu = ?', [req.params.id_contenido_menu], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});


// ============================================================================== //
// METODO POST 
// ============================================================================== //
// Ruta [/]

// Agregar un nuevo menus
routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('INSERT INTO contenido_menu set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Contenido_menu agregado');
        });
    });
});


// ============================================================================== //
// METODO DELETE 
// ============================================================================== //
// Ruta [/]

// Borrar un contenido_menu
routes.delete('/:id_contenido_menu', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('DELETE FROM contenido_menu WHERE id_contenido_menu = ?', [req.params.id_contenido_menu], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Contenido_menu eliminado');
        });
    });
});


// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [/]

// Modificar un contenido_menu
routes.put('/:id_contenido_menu', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE contenido_menu set ? WHERE id_contenido_menu = ?', [req.body, req.params.id_contenido_menu], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Contenido_menu modificado!');
        });
    });
});


module.exports = routes