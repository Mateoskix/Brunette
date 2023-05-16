import connection from '../server/config.js';

// Consulta para insertar una nueva orden
export function insertarOrden(orden, callback) {
    connection.query('INSERT INTO ordenes SET ?', orden, callback);
}


export function mostrarOrden(callback){
    connection.query('SELECT * FROM brunette.ordenes;', callback);
}