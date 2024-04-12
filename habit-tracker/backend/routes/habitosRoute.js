const express = require('express');
const router = express.Router();
const Habito = require('../models/Habito');

router.get('/:IdUsuario', async (req, res) => {
    try {
        const idUsuario = req.params.IdUsuario;
        const habitos = await Habito.obtenerHabitos(idUsuario);
        res.json(habitos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los hábitos del usuario' });
    }
});

module.exports = router;