const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Backend de Express en ejecución');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor de Express en ejecución en el puerto ${PORT}`);
});

const { createProxyMiddleware } = require('http-proxy-middleware');
const viteDevServer = 'http://localhost:3000';

//proxy inverso para todas las solicitudes que se envían a la ruta "/api"
app.use('/api', createProxyMiddleware({
  target: viteDevServer,
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api': ''
  }
}));

const usersRouter = require('../routes/users'); // Importar el archivo users.js

// Agregar la ruta a nuestro servidor
app.use('/api', usersRouter);
