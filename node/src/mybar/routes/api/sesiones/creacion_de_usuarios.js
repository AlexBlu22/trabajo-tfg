// Ruta [http://localhost:3000/sesion/creacion]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO POST 
// ============================================================================== //
// Ruta [/]

// Agregar un nuevo usuario
routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('INSERT INTO inf_usuarios set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Usuario agregado');
        });
    });
});

module.exports = routes