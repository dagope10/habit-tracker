const db = require('../config/db');

class Usuario {
    static async obtenerUsuario(email){
        const connection = await db;
        const [rows] = await connection.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        return rows[0];
    }

}

module.exports = Usuario;