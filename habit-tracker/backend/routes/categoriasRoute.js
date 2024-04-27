const express = require('express');
const router = express.Router();
const Habito = require('../models/Habito');


router.get('/', async (req, res)=>{
    try{
        const categorias = await Habito.obtenerCategorias();
        res.json(categorias);
    } catch(error) {
        res.status(500).json(console.log(error));
    }
})

module.exports = router;