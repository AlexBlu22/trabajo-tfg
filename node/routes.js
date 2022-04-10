// Este archivo de aqui sirve para las rutas

const express = require('express')
const routes = express.Router()


// Ruta de prueba [http://localhost:9000/api]
routes.get('/', (req, res) =>{
    res.send('API myBar')
})

// 
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

// Ruta [http://localhost:9000/api/usuarios]
routes.post('/usuarios', (req, res) =>{
    req.getConnection((err, conn)=>{
        // Para que muestre si hay un error
        if(err) return res.send(err)

        // Para que consulte en la BBDD
        conn.query('INSERT INTO inf_usuarios set ?', [req.body], (err, rows)=>{
            // Para que muestre si hay un error
            if(err) return res.send(err)

            // Para que pase la informacion en .json
            res.send('Usuario agregado')
        })
    })
})


module.exports = routes