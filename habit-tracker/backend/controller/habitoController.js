const Habito = require('../models/Habito');
const db = require('../config/db');

class habitoController {
    static async marcarHabitoRealizado(habitoId){
    try { 
        if(!habitoId){
            throw new Error('Hábito no encontrado')
        }
        const habito = await Habito.findById(habitoId);
        habito.realizadoUltimaVez = new Date();
        const connection = await db;
        const [resultado] = await connection.query('UPDATE habitos SET ultimaVezRealizado = ? WHERE id_habito = ?', [habito.realizadoUltimaVez, habitoId]); 
        return {...habito, realizadoUltimaVez: habito.realizadoUltimaVez};
    } catch(error){
        throw error;
    }
   

    }
    static async actualizarDiasYMedalla(idHabito, diasConsecutivos, diasTotales) {
        try {
            if(!idHabito) {
                throw new Error('Hábito no encontrado');
            }
            const medalla = determinarMedalla(diasConsecutivos);

            const connection = await db;
            const [resultado] = await connection.query('UPDATE habitos SET diasConsecutivos = ?, diasTotales = ?, medalla = ? WHERE id_habito =?', [diasConsecutivos, diasTotales, medalla, idHabito]);
            return resultado;


        } catch(error) {
            console.log('Error al encontrar el hábito', error);
        }




    }

   
}
function determinarMedalla(diasConsecutivos) {
    if (diasConsecutivos >= 120) {
        return 'Platino';
    } else if (diasConsecutivos >= 90) {
        return 'Oro';
    } else if (diasConsecutivos >= 60) {
        return 'Plata';
    } else if (diasConsecutivos >= 30) {
        return 'Bronce';
    } else {
        return 'Sin medalla'; 
    }
}

module.exports = habitoController;