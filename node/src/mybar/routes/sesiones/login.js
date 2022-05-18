// Ruta [http://localhost:3000/sesiones/login/june]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Mostrar la informacion del usuario (mostrar el usuario)
routes.get('/:usuario', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('select inf_usuarios.id_usuario, inf_usuarios.usuario, inf_usuarios.correo, inf_usuarios.contrasena from inf_usuarios  WHERE usuario = ?', [req.params.usuario], (err, rows)=>{
            if(err) return res.send(err);
            let resultados = {
                result: rows,
         }
         
         res.json(resultados);
            //res.write(resultados);
        });
    });
});

module.exports = routes
