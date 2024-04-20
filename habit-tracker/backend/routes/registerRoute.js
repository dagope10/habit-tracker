const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const Usuario = require('../models/Usuario')
const jwt = require('jsonwebtoken');


router.post('/', async (req, res) =>{
    try {
        const {nombre, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);



        const usuario = { nombre, email, password: hashedPassword };
        const resultado = await Usuario.registrarUsuario(usuario);

        const accessToken = jwt.sign({id: resultado.id, nombre: resultado.nombre}, process.env.JWT_SECRET, {expiresIn: '1h'});

        
        res.status(201).json( { message: 'Usuario registrado correctamente', data: resultado });

    } catch(error) {
        console.error('Error al registrar usuario', error.message);
        res.status(500).json({ message: 'Error al registrar el usuario!!'})

    }

})

module.exports = router;