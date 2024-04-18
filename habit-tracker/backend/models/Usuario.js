const db = require('../config/db');

class Usuario {
    static async obtenerUsuario(email){
        const connection = await db;
        const [rows] = await connection.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        return rows[0];
    }

    static async registrarUsuario(usuario) {

        try{ const connection = await db;
            const [result] = await connection.query('INSERT INTO usuarios SET ?', [usuario]);
            return result;
        } catch(error) {
            console.error('Error al registrar usuario', error);
            throw new Error(`Error al registrar usuario ${error.message}`)
        }
       
    } 

}

module.exports = Usuario;