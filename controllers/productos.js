import eventData from './../data/events/index.js';
/* import Connection from 'mysql/lib/Connection.js';
import { Connection } from 'mysql'; */
import connection from '../server/config.js';

//const connection = require('../database'); // Importa tu objeto de conexión 
// Consulta para obtener todos los productos
function obtenerproductos(callback) { 
    connection.query('SELECT * FROM brunette.productos;', callback);
}  

export default obtenerproductos;

