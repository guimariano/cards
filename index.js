import express from 'express';
import alunosRoutes from './src/routes/alunosRoutes.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuração para o backend da API
app.use('/alunos', alunosRoutes);

// Configuração para o frontend
app.use(express.static(join(__dirname, 'src', 'app', 'public')));
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'src', 'app', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});