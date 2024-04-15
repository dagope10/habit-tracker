const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
require('dotenv').config({path: './entorno.env'});



function generarTokenAcceso(usuario){
    return jwt.sign(usuario, process.env.JWT_SECRET, { expiresIn: '1h'});
}

function generarTokenRefresh(usuario) {
    return jwt.sign(usuario, process.env.REFRESH_TOKEN_SECRET, {expiresIn:'7d'});
}


router.post('/', async(req, res) => {
    const { email, password } = req.body;
    const usuario = await Usuario.obtenerUsuario(email);

    if(!usuario) {
        return res.status(401).json({error: "Usuario no encontrado"});
    }

    const esPasswordCorrecto = bcrypt.compareSync(password, usuario.password);
    if(!esPasswordCorrecto) {
        return res.status(401).json({error:"Contraseña incorrecta"});
    }

    const accessToken = generarTokenAcceso({id: usuario.id, nombre: usuario.nombre});

    res.cookie('token', accessToken, {
        httpOnly: true,
        maxAge:3600000
    })
    res.set('Access-Control-Expose-Headers', 'true');
    res.json({message: "Inicio de sesión exitoso",
                id: usuario.id,
            nombre: usuario.nombre});

})

module.exports = router;