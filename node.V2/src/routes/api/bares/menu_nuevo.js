// Ruta [http://localhost:3000/bar/menu_crear]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO POST 
// ============================================================================== //
// Ruta [/]

// Agregar un nuevo menu
routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('INSERT INTO menus set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Menu agregado');
        });
    });
});

module.exports = routes