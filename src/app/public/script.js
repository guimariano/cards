async function fetchAlunos() {
  try {
    // URL do endpoint da API
    const response = await fetch('/alunos');

    // Verifique se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    // Converta a resposta para JSON
    const data = await response.json();

    // Manipule os dados (por exemplo, exiba-os em um elemento da página)
    displayAlunos(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Função para exibir dados na página
function displayAlunos(alunos) {
  console.log(alunos)
  const alunosList = document.getElementById('alunos-list');

  // Limpe a lista antes de adicionar novos itens
  alunosList.innerHTML = '';

  // Adicione cada aluno à lista
  alunos.forEach(aluno => {
    const listItem = document.createElement('li');
    const {
      nome,
      curso,
      avatar_url,
      matricula
    } = aluno

    listItem.textContent = `
      Nome: ${nome}
      Curso: ${curso}
      AvatarUrl: ${avatar_url}
      Matrícula: ${matricula}
    `;

    alunosList.appendChild(listItem);
  });
}

// Execute a função getAll quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', fetchAlunos);