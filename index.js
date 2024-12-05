require('dotenv').config();

const express = require ('express');
var cors = require('cors');
const {dbConnection} = require('./database/config');
const usuario = require('./models/usuario');

//Crear el servidor de Express
const app = express();

//configurar cors
app.use(cors());

//lectura y parceo del Body
app.use(express.json());


//base de datos
dbConnection();

//console.log(process.env);

//rutas
app.use('/api/usuarios', require ('./routes/usuarios'));
app.use('/api/login', require ('./routes/auth'));



app.listen( process.env.PORT, () =>{
    console.log('Servidor corriendo en el puerto' + process.env.PORT);
});



//ivonneroxana16
// ddTwTonVmBy7hWTf
