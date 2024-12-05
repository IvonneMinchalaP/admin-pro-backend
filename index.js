require('dotenv').config();

const express = require ('express');
var cors = require('cors');
const {dbConnection} = require('./database/config');

//Crear el servidor de Express
const app = express();

//configurar cors
app.use(cors());


//base de datos
dbConnection();

console.log(process.env);

//rutas
app.get('/', (req,res) => {

    res.json({
        ok:true,
        msg:'Hola Mundo '
    });

});

app.listen( process.env.PORT, () =>{
    console.log('Servidor corriendo en el puerto' + process.env.PORT);
});



//ivonneroxana16
// ddTwTonVmBy7hWTf
