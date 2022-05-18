// Ruta [http://localhost:3000/bar/informacion]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Mostrar la informacion del bar
routes.get('/:id_bar', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM tabla_bares WHERE id_bar = ?', [req.params.id_bar], (err, rows)=>{
            if(err) return res.send(err);
            let resultados = {
                result: rows,
         }
         
         res.json(resultados);
        });
    });
}); 

module.exports = routes