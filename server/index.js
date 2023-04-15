import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const router = express.Router();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();



// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join('../public/css')));

// Configurar el middleware body-parser para parsear el cuerpo de las solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar la ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.resolve('../Brunette/index.html'));
  });

// Definición de la ruta POST /cart
// Configurar la ruta para /cart
app.post('/cart', (req, res) => {
  console.log(req.body);
  res.send(`
    <html>
      <body>
        <h1>Valor de showCart recibido: ${req.body.showCart}</h1>
      </body>
    </html>
  `);
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
