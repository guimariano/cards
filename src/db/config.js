import mysql from 'mysql2/promise';

// Crie uma conexão com o banco de dados
const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'fecaf',
});

// Conecte-se ao banco de dados
connection.connect(err => {
  if (err) {
    console.error('Error trying to connect to database:', err);
    return;
  }

  console.log('Connected succesfully to database.');
});

// Exporta a conexão
export {
  connection
};