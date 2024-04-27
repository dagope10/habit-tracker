const express = require('express');
const router = express.Router();
const Habito = require('../models/Habito');
const habitoController = require('../controller/habitoController');

router.get('/:IdUsuario', async (req, res) => {
    try {
        const idUsuario = req.params.IdUsuario;
        const habitos = await Habito.obtenerHabitos(idUsuario);
        res.json(habitos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los hábitos del usuario' });
    }
});

router.post('/', async(req, res) =>{
    try {
        const { categoria, usuarioId, nombre, descripcion } = req.body;
        const resultado = await Habito.insertarHabito(categoria, usuarioId, nombre, descripcion);

        return res.json(resultado);
    } catch(error) {
        res.status(500).json({error: `Error al insertar hábito: ${error}`});
    }
})

router.put('/:id/realizado', async(req, res) =>{
    try {
        const habitoId = req.params.id;
        const habitoActualizado = await habitoController.marcarHabitoRealizado(habitoId);
        res.json(habitoActualizado);
    } catch(error){
        res.status(500).send(error.message);
    }
} )

router.put('/:idHabito/completado', async(req, res) => {
    try{
        const { diasConsecutivos, diasTotales } = req.body;
        const idHabito = req.params.idHabito;
        await habitoController.actualizarDiasYMedalla(idHabito, diasConsecutivos, diasTotales);
        res.send({success: true, message: 'Días actualizados correctamente'})
    } catch (error) {
        res.status(500).send({success: false, message: 'Error al actualizar los días', error});
    }
})

router.delete('/eliminar/:idHabito', async(req, res) => {
    try {
        const idHabito = req.params.idHabito;
        await Habito.eliminarHabito(idHabito);
        res.send({success: true, message: 'Hábito eliminado correctamente'})
    } catch (error) {
        res.send({success: false, message: 'Error al eliminar el hábito', error})
    }
})


module.exports = router;