import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const router = express.Router();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();

//acceso desde cualquier dominio
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const productos = [
  {
    id: 1,
    name: 'Dulce',
    href: '#',
    url: 'img/producto4.JPG',
    imageAlt: "Desde 2018",
    price: '$6.800',
    color: 'Mediano',
  },
  {
    id: 2,
    name: 'QUESANETTA',
    href: '#',
    url: 'img/producto4.JPG',
    imageAlt: "Maravilloso.",
    price: '$6.800',
    color: 'Mediano',
  },
  {
    id: 3,
    name: 'Helado',
    href: '#',
    url: 'img/producto4.JPG',
    imageAlt: "Maravilloso.",
    price: '$6.800',
    color: 'Mediano',
  }
];

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join('../public/css')));
// Configurar el middleware body-parser para parsear el cuerpo de las solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar la ruta principal
app.get('/', (req, res) => {
  'hola';
});

app.get('/productos',(req,res)=>{
  res.json(productos);
});
app.post('/shoppingcar', (req, res) => {
  
});
app.get('/shoppingcar', (req, res) => {
  'hola';
});


// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

