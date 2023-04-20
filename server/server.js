import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const router = express.Router();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
const productos = [
  {
    id: 1,
    name: 'QUESANETTA',
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
    name: 'QUESANETTA',
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
res.json(productos);
});
app.get('/productos',(req,res)=>{
  res.json(productos);
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});