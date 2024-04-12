const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
require('dotenv').config({path: './entorno.env'});

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
    const token = jwt.sign({id: usuario.id}, process.env.JWT_SECRET, {expiresIn: '1h'});

    res.json({token});

})

module.exports = router;