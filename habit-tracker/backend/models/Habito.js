
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
}


module.exports = Habito;