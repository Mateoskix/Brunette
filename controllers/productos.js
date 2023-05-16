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

export function consultarIdProducto(nombre, callback){
    connection.query('SELECT ID_Producto FROM productos WHERE nombre = ?', nombre,  callback);
}

export function consultarIdProductoo(id, callback){
    connection.query('SELECT ID_Producto FROM productos WHERE ID_Producto = ?', id,  callback);
}

export function actualizarProducto(producto, callback){
    connection.query('UPDATE productos SET ?', producto, callback);
}

export function eliminarProducto(idProducto, callback){
    connection.query('DELETE FROM productos WHERE id = ?', idProducto, callback);
}
