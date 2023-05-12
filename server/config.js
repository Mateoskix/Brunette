import mysql from 'mysql';

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'jtorres2004', //contraseña
  });
export default connection;