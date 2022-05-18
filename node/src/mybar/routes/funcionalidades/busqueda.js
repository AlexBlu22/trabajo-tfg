// Ruta busqueda [http://localhost:3000/busqueda]

const express = require('express');
const routes = express.Router();


// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/usuario]

// Obtener todos los usuarios por su nombre
routes.get('/usuario/nombre/:usuario', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM inf_usuarios WHERE usuario = ?', [req.params.usuario], (err, rows)=>{
            if(err) return res.send(err);
            let resultados = {
                result: rows,
         }
         
         res.json(resultados);
        });
    });
});

// Obtener todos los usuarios por su correo
routes.get('/usuario/correo/:correo', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM inf_usuarios WHERE correo = ?', [req.params.correo], (err, rows)=>{
            if(err) return res.send(err);
            let resultados = {
                result: rows,
         }
         
         res.json(resultados);
        });
    });
});


// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/bar]

// Obtener todos los bares por su nombre
routes.get('/bar/nombre/:nombre', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM tabla_bares WHERE nombre = ?', [req.params.nombre], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

// Obtener todos los bares por su direccion
routes.get('/bar/direccion/:direccion', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM tabla_bares WHERE direccion = ?', [req.params.direccion], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});


// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/comidas]

// Obtener todas las comidas por su nombre
routes.get('/comida/nombre/:comida', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM comidas WHERE comida = ?', [req.params.comida], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

// Obtener todas las comidas por su precio ascendente
routes.get('/comida/precio_ascendente', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM comidas ORDER BY precio ASC', [req.params.comida], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

// Obtener todas las comidas por su precio ascendente
routes.get('/comida/precio_descendente', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM comidas ORDER BY precio DESC', [req.params.comida], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});


module.exports = routes