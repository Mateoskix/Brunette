import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
/* import routerApi from '../app/routers/index.js'; */
const router = express.Router();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
const productos = [
  {nombre : 'helado',
  cantidad : 1,
  id: 123
  },
  {nombre : 'helado',
  cantidad : 1,
  id: 123
  },
  {nombre : 'helado',
  cantidad : 1,
  id: 123
  }
];
/* 
routerApi(app); */
// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join('../public/css')));
// Configurar el middleware body-parser para parsear el cuerpo de las solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(module);

/* 
// Configurar la ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.resolve('../index.html'));
  }); */


// Definición de la ruta POST /cart
// Configurar la ruta para /cart
app.get('/cart', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Valor de showCart recibido: ${req.body.showCart}</h1>
      </body>
    </html>
  `);
});


app.get('/', (req, res) => {
res.json(productos);
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});