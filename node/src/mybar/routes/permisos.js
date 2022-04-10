// Ruta permisos [http://localhost:3000/permisos]

const express = require('express');
const routes = express.Router();


// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Obtener todos los permisos
routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM permisos', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

// Obtener un unico permiso
routes.get('/:id_permiso', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM permisos WHERE id_permiso = ?', [req.params.id_permiso], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});


// ============================================================================== //
// METODO POST 
// ============================================================================== //
// Ruta [/]

// Agregar un nuevo permiso
routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('INSERT INTO permisos set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Permiso agregado');
        });
    });
});


// ============================================================================== //
// METODO DELETE 
// ============================================================================== //
// Ruta [/]

// Borrar un permiso
routes.delete('/:id_permiso', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('DELETE FROM permisos WHERE id_permiso = ?', [req.params.id_permiso], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Permiso eliminado');
        });
    });
});


// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [/]

// Modificar un usuario
routes.put('/:id_permiso', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE permisos set ? WHERE id_permiso = ?', [req.body, req.params.id_permiso], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Permiso modificado!');
        });
    });
});


module.exports = routes