// Ruta [http://localhost:3000/bar/edit_informacion]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [/]

// Modificar la informacion del bar
routes.put('/:id_bar', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE tabla_bares set ? WHERE id_bar = ?', [req.body, req.params.id_bar], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Bar modificado!');
        });
    });
});

module.exports = routes