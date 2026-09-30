// Aqui eu defino o tipo do objeto: cada teste precisa ter id, nome, se passou e o tempo de execução
export type ExecucaoTeste = {
  id: number;
  nome: string;
  passou: boolean;
  tempoMs: number;
};

// Aqui eu crio a nossa lista com 5 execuções de teste para usar nos exercícios
export const testes: ExecucaoTeste[] = [
  { id: 1, nome: 'Login', passou: true, tempoMs: 100 },
  { id: 2, nome: 'Cadastro', passou: false, tempoMs: 200 },
  { id: 3, nome: 'Carrinho', passou: true, tempoMs: 150 },
  { id: 4, nome: 'Perfil', passou: true, tempoMs: 80 },
  { id: 5, nome: 'Pagamento', passou: false, tempoMs: 300 }
];

// Com o 'map', eu percorro a lista e extraio apenas os nomes de cada teste
export const nomesDosTestes = testes.map((teste) => teste.nome);

// Com o 'filter', eu formato uma nova lista mantendo apenas os testes que passaram
export const testesAprovados = testes.filter((teste) => teste.passou === true);

// Com o 'reduce', eu somo os tempos de todos os testes para descobrir o tempo total de execução
export const tempoTotal = testes.reduce((soma, teste) => soma + teste.tempoMs, 0);

// Aqui eu criei uma função assíncrona que procura um teste na lista usando o seu ID
export async function buscarTestePorId(id: number): Promise<ExecucaoTeste> {
  // Procura na lista o primeiro teste que tenha o ID igual ao solicitado
  const testeEncontrado = testes.find((teste) => teste.id === id);

  // Se eu não encontrar nenhum teste com esse ID, lanço um erro imediatamente
  if (!testeEncontrado) {
    throw new Error('Teste não encontrado');
  }

  // Se encontrei, retomo o teste correspondente
  return testeEncontrado;
}