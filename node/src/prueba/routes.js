// Este archivo de aqui sirve para las rutas

const express = require('express')
const routes = express.Router()


// Ruta de prueba [http://localhost:9000/api]
routes.get('/', (req, res) =>{
    res.send('API myBar')
})

// ============================================================================== //
// METODO GET 
// ============================================================================== //
// Ruta [http://localhost:9000/api/usuarios]
routes.get('/usuarios', (req, res) =>{
    req.getConnection((err, conn)=>{
        // Para que muestre si hay un error
        if(err) return res.send(err)

        // Para que consulte en la BBDD
        conn.query('SELECT * FROM inf_usuarios', (err, rows)=>{
            // Para que muestre si hay un error
            if(err) return res.send(err)

            // Para que pase la informacion en .json
            res.json(rows)
        })
    })
})

// ============================================================================== //
// METODO POST 
// ============================================================================== //
// Ruta [http://localhost:9000/api/usuarios]
routes.post('/usuarios', (req, res) =>{
    req.getConnection((err, conn)=>{
        // Para que muestre si hay un error
        if(err) return res.send(err)
        
        // Para que agrege en la BBDD
        conn.query('INSERT INTO inf_usuarios set ?', [req.body], (err, rows)=>{
            // Para que muestre si hay un error
            if(err) return res.send(err)

            // Para que muestre mensaje de confirmacion
            res.send('Usuario agregado')
        })
    })
})

// ============================================================================== //
// METODO DELETE 
// ============================================================================== //
// Ruta [http://localhost:9000/api/usuarios]
routes.delete('/usuarios/:id_usuario', (req, res) =>{
    req.getConnection((err, conn)=>{
        // Para que muestre si hay un error
        if(err) return res.send(err)
        
        // Para que elimine en la BBDD
        conn.query('DELETE FROM inf_usuarios WHERE id_usuario = ?', [req.params.id_usuario], (err, rows)=>{
            // Para que muestre si hay un error
            if(err) return res.send(err)

            // Para que muestre mensaje de confirmacion
            res.send('Usuario eliminado')
        })
    })
})

// ============================================================================== //
// METODO PUT 
// ============================================================================== //
// Ruta [http://localhost:9000/api/usuarios]
routes.put('/usuarios/:id_usuario', (req, res)=>{
    req.getConnection((err, conn)=>{
        // Para que muestre si hay un error
        if(err) return res.send(err)

        // Para que modifique en la BBDD
        conn.query('UPDATE inf_usuarios set ? WHERE id_usuario = ?', [req.body, req.params.id_usuario], (err, rows)=>{
            // Para que muestre si hay un error
            if(err) return res.send(err)

            // Para que muestre si hay un error
            res.send('Usuario modificado!')
        })
    })
})


module.exports = routes