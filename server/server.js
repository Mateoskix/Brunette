import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const router = express.Router();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
let cartItems = [];
let listaActualizada = [];


app.use(bodyParser.json());

//acceso desde cualquier dominio
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const sedes = [
  {
    id: 1,
    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.3759099296744!2d-73.26948398593512!3d10.47100339252922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab91d21490f7b%3A0xcf64425419f55be1!2sBrunette%20Artesanal%20(Garupal)!5e0!3m2!1sen!2sco!4v1680560835554!5m2!1sen!2sco'
  },
  {
    id: 2,
    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.1732797109557!2d-73.28318732760061!3d10.487002666758478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab775219415df%3A0xccfa655df29fa743!2sBrunette%20Artesanal%20(Sede%20Sierra%20Nevada)%20trailer!5e0!3m2!1sen!2sco!4v1682633501241!5m2!1sen!2sco"'
  }
]

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

app.get('/sedes',(req,res)=>{
  res.json(sedes);
});

app.post('/cart', (req, res) => {
  listaActualizada = req.body;
  res.status(200).json({ message: 'La lista se actualizó correctamente' });
});

app.get('/cart', (req, res) => {
  res.send(listaActualizada);
});


// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

