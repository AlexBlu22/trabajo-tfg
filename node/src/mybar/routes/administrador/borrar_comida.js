// Ruta [http://localhost:3000/bar/edit_menu]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO DELETE 
// ============================================================================== //
// Ruta [/]

// Borrar un usuario
routes.delete('/:id_comida', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('DELETE FROM comidas WHERE id_comida = ?', [req.params.id_comida], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Comida eliminada');
        });
    });
});

module.exports = routes