const alunos = [
  {nome: 'Joao', nota: 7.3, bolsita: false},
  {nome: 'Maria', nota: 9.2, bolsita: true},
  {nome: 'Pedro', nota: 9.8, bolsita: false},
  {nome: 'Ana', nota: 8.7, bolsita: true},
];

//Desafio 1: Todos os alunos sao bolsistas?
const todosBolsistas = (resultado, bolsita) => resultado && bolsita;
console.log(alunos.map(a => a.bolsita).reduce(todosBolsistas));
//Desafio 2: Algum aluno e bolsista?
const algumBolsistas = (resultado, bolsita) => resultado || bolsita;
console.log(alunos.map(a => a.bolsita).reduce(algumBolsistas));
