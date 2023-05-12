import connection from '../server/config.js';

// Consulta para insertar una nueva orden
function insertarOrden(orden, callback) {
    connection.query('INSERT INTO ordenes SET ?', orden, callback);
}

export default insertarOrden;