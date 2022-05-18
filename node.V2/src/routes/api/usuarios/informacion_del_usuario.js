// Ruta [http://localhost:3000/usuarios/informacion]

const express = require('express');
const routes = express.Router();

// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Mostrar la informacion del usuario
routes.get('/:id_usuario', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('select inf_usuarios.id_usuario, inf_usuarios.usuario, inf_usuarios.correo, inf_usuarios.contrasena, tipo_usuarios.id_tipo_usuario, tipo_usuarios.tipo_usuario, permisos.id_permiso, permisos.permiso from inf_usuarios left join tipo_usuarios on inf_usuarios.id_tipo_usuario = tipo_usuarios.id_tipo_usuario left join permisos on tipo_usuarios.id_tipo_usuario = permisos.id_permiso WHERE id_usuario = ?', [req.params.id_usuario], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

module.exports = routes