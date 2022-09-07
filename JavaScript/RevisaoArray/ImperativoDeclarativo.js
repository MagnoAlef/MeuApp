const alunos = [
  {nome: 'Joao', nota: 7.9},
  // eslint-disable-next-line no-dupe-keys
  {nota: 'Maria', nota: 9.2},
];
//Imperativo -> mostra mais os passos de execução
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);
//Declarativo -> faz a execução sem mostra os passos
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);
