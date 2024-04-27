
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
        return rows;
    }

    static async insertarHabito(categoria, usuarioId, nombre, descripcion){

        try {
            const connection = await db;
            const query = `
            INSERT INTO habitos (
              id_categoria, 
              id_usuario, 
              nombre, 
              descripcion, 
              diasConsecutivos, 
              diasTotales,  
              medalla
            ) VALUES (?, ?, ?, ?, 0, 0, "Sin medalla")
          `;
    
            const [rows] = await connection.query(query, [categoria, usuarioId, nombre, descripcion]);
            console.log('Hábito insertado con éxito', rows)
            return [rows]
        } catch(error) {
            console.error('Error al insertar el hábito', error);
            throw error;
        
        } 
    }

    static async findById(habitoId) {
        const connection = await db;
        const [rows] = await connection.query('SELECT * from habitos WHERE id_habito = ?', [habitoId])
        return rows[0];
    }

    static async eliminarHabito(idHabito) {
        try {
            const connection = await db;
            const [resultado] = await connection.query('DELETE FROM habitos WHERE id_habito = ?', [idHabito]);
            return resultado;
        } catch (error) {
            console.error('Error al eliminar el hábito', error);
        }
    }
}


module.exports = Habito;