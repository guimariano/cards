import { connection } from '../db/config.js';

export async function getAll() {
  try {
    const [results, _] = await connection.query('SELECT * FROM alunos');
    return results
  } catch (error) {
    console.log(error);
  }
}