const express = require('express');
const app = express();
const habitosRoute = require('./routes/habitosRoute');
const loginRoute = require('./routes/loginRoute');
const categoriasRoute = require('./routes/categoriasRoute')
const cors = require('cors');
const verificarToken = require('./middleware/verificarToken');
const registerRoute = require('./routes/registerRoute');


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length', 'X-Knowledge']
}));



app.use(require('cookie-parser')());



app.use('/habitos/', verificarToken, habitosRoute);
app.use('/registrar-usuario', registerRoute);

app.use('/login', loginRoute);
app.use('/categorias', categoriasRoute)
app.use('/insertarHabitos', habitosRoute)

app.post('/logout', (req, res) => {
  try {
      // Clear the 'token' cookie
      res.clearCookie('token', { path: '/' });
      res.json({message: 'Cookie eliminada'});
  } catch (error) {
      console.error('Error al intentar cerrar sesión:', error);
      // Send a server error response
      res.status(500).send('Error al cerrar sesión');
  }
});

app.listen(3000, () => {console.log ('Servidor corriendo en el puerto 3000')});