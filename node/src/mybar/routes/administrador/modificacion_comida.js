// Ruta [http://localhost:3000/bar/edit_menu]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [/]

// Modificar una comida
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