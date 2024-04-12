const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();
const db = require('./config/db');
const Habito = require('./models/Habito');
const habitosRoute = require('./routes/habitosRoute');
const loginRoute = require('./routes/loginRoute');

const verificarToken = require('./middleware/verificarToken');


app.use(express.json());


app.use('/habitos/',habitosRoute);

app.use('/ruta-protegida', verificarToken, (req, res) =>{
  res.send("Ruta protegida, has podido acceder con el token, enhorabuena")
})

app.use('/', loginRoute);
app.listen(3000, () => {console.log ('Servidor corriendo en el puerto 3000')});