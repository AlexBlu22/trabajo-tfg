// Ruta tipo_usuarios [http://localhost:3000/tipo_usuarios]

const express = require('express');
const routes = express.Router();


// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Obtener todos los tipos de usuarios
routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM tipo_usuarios', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

// Obtener un unico tipo de usuario
routes.get('/:id_tipo_usuario', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM tipo_usuarios WHERE id_tipo_usuario = ?', [req.params.id_tipo_usuario], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});


// ============================================================================== //
// METODO POST 
// ============================================================================== //
// Ruta [/]

// Agregar un nuevo tipo de usuario
routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('INSERT INTO tipo_usuarios set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Nuevo tipo de usuarios agregado');
        });
    });
});


// ============================================================================== //
// METODO DELETE 
// ============================================================================== //
// Ruta [/]

// Borrar un tipo de usuario
routes.delete('/:id_tipo_usuario', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('DELETE FROM tipo_usuarios WHERE id_tipo_usuario = ?', [req.params.id_tipo_usuario], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Tipo de usuarios eliminado');
        });
    });
});


// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [/]

// Modificar un tipo de usuario
routes.put('/:id_tipo_usuario', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE tipo_usuarios set ? WHERE id_tipo_usuario = ?', [req.body, req.params.id_tipo_usuario], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Tipo de usuarios modificado!');
        });
    });
});


module.exports = routes