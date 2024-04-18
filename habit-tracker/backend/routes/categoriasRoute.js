const express = require('express');
const router = express.Router();


router.get('/', async (req, res)=>{
    try{
        const categorias = await Habito.obtenerCategorias();
        res.json(categorias);
        console.log(categorias);
    } catch {
        res.status(500).json({error: 'Error al obtener categorías de los hábitos'})
    }
})

module.exports = router;