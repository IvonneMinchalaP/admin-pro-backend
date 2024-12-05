const {response} = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require ('../models/usuario');

const login = async(req, res = response) => {

    const { email, password} = req.body;

    try {
        // verificar email
        const usuarioDB = await Usuario.findOne({email });

        if(!usuarioDB){
            return res.status(404).json({
                ok: false,
                msg: 'email no encontrado'
            });
        }

        // verificar contrasena 

        const validPassword = bcrypt.compareSync(password,usuarioDB.password );

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Contrase;a no valida'
            });
        }

        // generar un token 

        res.json({
            ok:true,
            msg: ' Hola mundo'
        })
        
    } catch (error) {
        console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Hable con el Administrador'
            })
    }
}

module.exports = {
    login
}