// Ruta [http://localhost:3000/bar/edit_menu]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO POST 
// ============================================================================== //
// Ruta [/]

// Agregar una nueva comida
routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('INSERT INTO comidas set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Comida agregada');
        });
    });
});

module.exports = routes