import express from 'express';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join('../public/css')));

// Configurar la ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.resolve('../index.html'));
  });

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
