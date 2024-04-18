const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    const token = req.cookies.token;

    if(!token){
        return res.status(403).send({mensaje: "No hay token"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) {
            console.log("Error al verificar el token", err);
            return res.status(401).send({mensaje: "Token inválido"});
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = verificarToken;
