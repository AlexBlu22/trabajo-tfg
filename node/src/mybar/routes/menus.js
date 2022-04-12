// Ruta menus [http://localhost:3000/menus]

const express = require('express');
const routes = express.Router();


// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Obtener todos los menus
routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM menus', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

// Obtener un unico menus
routes.get('/:id_menu', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM menus WHERE id_menu = ?', [req.params.id_menu], (err, rows)=>{
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
        
        conn.query('INSERT INTO menus set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Menu agregado');
        });
    });
});


// ============================================================================== //
// METODO DELETE 
// ============================================================================== //
// Ruta [/]

// Borrar un menu
routes.delete('/:id_menu', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('DELETE FROM menus WHERE id_menu = ?', [req.params.id_menu], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Menu eliminado');
        });
    });
});


// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [/]

// Modificar un menu
routes.put('/:id_menu', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE menus set ? WHERE id_menu = ?', [req.body, req.params.id_menu], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Menu modificado!');
        });
    });
});


module.exports = routes