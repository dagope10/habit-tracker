
const db = require('../config/db');

class Habito {
    static async obtenerHabitos(idUsuario) {
        const connection = await db;
        const [rows] = await connection.query('SELECT * FROM habitos WHERE id_usuario = ?', [idUsuario]);
        return rows;
    }

    static async obtenerCategorias(){
        const connection = await db;
        const [rows] = await connection.query('SELECT * FROM categorias');
        console.log(rows)
        return rows;
    }

    static async insertarHabito(categoria, usuarioId, nombre, descripcion){

        try {const connection = await db;
            const query = `
            INSERT INTO habitos (
              id_categoria, 
              id_usuario, 
              nombre, 
              descripcion, 
              diasConsecutivos, 
              diasTotales, 
              tiempo, 
              medalla
            ) VALUES (?, ?, ?, ?, 0, 0, 0, "Sin medalla")
          `;
    
            const [rows] = await connection.query(query, [categoria, usuarioId, nombre, descripcion]);
            console.log('Hábito insertado con éxito', rows)
            return [rows]
        } catch(error) {
            console.error('Error al insertar el hábito', error);
            throw error;
        
        } 
    }
}


module.exports = Habito;