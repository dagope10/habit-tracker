const express = require('express');
const app = express();
const habitosRoute = require('./routes/habitosRoute');
const loginRoute = require('./routes/loginRoute');
const categoriasRoute = require('./routes/categoriasRoute')
const cors = require('cors');
const verificarToken = require('./middleware/verificarToken');


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length', 'X-Knowledge']
}));



app.use(require('cookie-parser')());



app.use('/habitos/', verificarToken, habitosRoute);
app.use('/', habitosRoute);

app.use('/', loginRoute);
app.use('/categorias', categoriasRoute)
app.listen(3000, () => {console.log ('Servidor corriendo en el puerto 3000')});