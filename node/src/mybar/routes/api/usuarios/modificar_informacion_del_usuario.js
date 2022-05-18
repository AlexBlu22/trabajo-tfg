// Ruta [http://localhost:3000/usuario/edit_informacion]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [/]

// Modificar la informacion del usuario
routes.put('/:id_usuario', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE inf_usuarios set ? WHERE id_usuario = ?', [req.body, req.params.id_usuario], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Usuario modificado!');
        });
    });
});

module.exports = routes