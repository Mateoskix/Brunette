import sql from 'mssql';

const config = { user: 'Brunette', password: 'Brunette', server: 'localhost\\SQLEXPRESS', database: 'Brunette' };
const pool = new sql.ConnectionPool(config);
pool.connect(err => { if (err) { console.error('Failed to connect to SQL Server Express', err); } 
else { console.log('Connected to SQL Server Express'); } });
export default pool;