const sql = require('mssql');

// const connection = sql.createPool((
//     host: 'localhost',
//     post: 3306,
//     user: '',
//     password: '',
//     database: '',

// ));
const config = {
    server: 'localhost',
    port: 1433,
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'tu_base_de_datos'
};


module.exports = connection;