const db = require('../config/db');

class Usuario {
    static async obtenerUsuario(email){
        const connection = await db;
        const [rows] = await connection.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        return rows[0];
    }

    static async registrarUsuario(usuario) {

        try{ const connection = await db;
            const [comprobacion] = await connection.query('SELECT * FROM usuarios WHERE email = ?', [usuario.email]);
            if(comprobacion.length > 0) {
                throw new Error('El usuario ya existe');
        }
            const [result] = await connection.query('INSERT INTO usuarios SET ?', [usuario]);
            return result;
        } catch(error) {
            throw new Error(`Error al registrar usuario ${error.message}`)
        }
       
    } 

}

module.exports = Usuario;