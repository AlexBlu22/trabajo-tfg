// Ruta [http://localhost:3000/bar/mostrar_bares]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Mostrar todos los bares
routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM tabla_bares', (err, rows)=>{
            if(err) return res.send(err);
            let resultados = {
                result: rows,
         }
         
         res.json(resultados);
        });
    });
});

module.exports = routes