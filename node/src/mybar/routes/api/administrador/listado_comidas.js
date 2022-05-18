// Ruta [http://localhost:3000/bar/edit_menu]

const express = require('express');
const routes = express.Router();

// Obtener todas las comidas
routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM comidas', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

// Obtener una unica comida
routes.get('/:id_comida', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM comidas WHERE id_comida = ?', [req.params.id_comida], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

module.exports = routes