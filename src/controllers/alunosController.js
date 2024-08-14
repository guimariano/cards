import { getAll as findAll } from '../models/alunosModel.js';

export async function getAll(req, res) {
  const results = await findAll();
  res.json(results);
}