// Este archivo de aqui sirve para la configuracion del Node.js

const express = require('express')
const app = express()
const mysql = require('mysql')
const myconn = require('express-myconnection')

// Para conectarse con las rutas que estan guardadas en routes.js, la conexion la hace en la linea 34-35
// Recuerda que [./routes] es una ruta de directorio si quieres meterte dentro de otros directorios pon la ruta a sequir
const routes = require('./routes')

// Para indicar [app.get('port')] que valor quiere que sea, en este caso el puerto
app.set('port', process.env.PORT || 9000)
// Configuracion para conectarse a la base de datos MySQL
const dbOpscions = {
    host: 'localhost',
    post: '3306',
    user: 'root',
    password: 'root',
    database: 'databaseMyBarTFG',
}

// middlewares
app.use(myconn(mysql, dbOpscions, 'single'))
app.use(express.json())


// Para indicar las rutas
// Ruta principal de prueba [http://localhost:9000/]
app.get('/', (req, res) =>{
    res.send('Bienvenido a mi API')
})

// Ruta [http://localhost:9000/api] , todas las demas rutas que van a continuacion estan en routes.js
//app.use('/api', routes)

app.use('/inf_usuarios', require('./rutas/inf_usuarios'))


// Para indicar en que puesto quiere que escuche
app.listen(app.get('port'), ()=>{
    // Para mostrar por comando el estado del servidor
    console.log('server runing on port', app.get('port'))
})