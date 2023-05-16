import eventData from './../data/events/index.js';
/* import Connection from 'mysql/lib/Connection.js';
import { Connection } from 'mysql'; */
import connection from '../server/config.js';

//const connection = require('../database'); // Importa tu objeto de conexión 
// Consulta para obtener todos los productos
export function obtenerproductos(callback) { 
    connection.query('SELECT * FROM brunette.productos;', callback);
}  


export function insertarProducto(producto, callback) {
    connection.query('INSERT INTO productos SET ?', producto, callback);
}

