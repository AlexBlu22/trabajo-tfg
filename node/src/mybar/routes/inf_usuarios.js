// Ruta inf_usuarios [http://localhost:3000/inf_usuarios]

const express = require('express');
const routes = express.Router();


// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [/]

// Obtener todos los usuarios
routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('select inf_usuarios.usuario, inf_usuarios.correo, inf_usuarios.contrasena, tipo_usuarios.id_tipo_usuario, tipo_usuarios.tipo_usuario, permisos.id_permiso, permisos.permiso from inf_usuarios left join tipo_usuarios on inf_usuarios.id_tipo_usuario = tipo_usuarios.id_tipo_usuario left join permisos on tipo_usuarios.id_tipo_usuario = permisos.id_permiso;', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });

        /*conn.query('SELECT * FROM inf_usuarios', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });*/
    });
});

// Obtener un unico usuario
routes.get('/:id_usuario', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('select inf_usuarios.usuario, inf_usuarios.correo, inf_usuarios.contrasena, tipo_usuarios.id_tipo_usuario, tipo_usuarios.tipo_usuario, permisos.id_permiso, permisos.permiso from inf_usuarios left join tipo_usuarios on inf_usuarios.id_tipo_usuario = tipo_usuarios.id_tipo_usuario left join permisos on tipo_usuarios.id_tipo_usuario = permisos.id_permiso WHERE id_usuario = ?', [req.params.id_usuario], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});


// ============================================================================== //
// METODO POST 
// ============================================================================== //
// Ruta [/]

// Agregar un nuevo usuario
routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('INSERT INTO inf_usuarios set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Usuario agregado');
        });
    });
});


// ============================================================================== //
// METODO DELETE 
// ============================================================================== //
// Ruta [/]

// Borrar un usuario
routes.delete('/:id_usuario', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('DELETE FROM inf_usuarios WHERE id_usuario = ?', [req.params.id_usuario], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Usuario eliminado');
        });
    });
});


// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [/]

// Modificar un usuario
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