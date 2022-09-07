const alunos = [
  {nome: 'Joao', nota: 7.3, bolsita: false},
  {nome: 'Maria', nota: 9.2, bolsita: true},
  {nome: 'Pedro', nota: 9.8, bolsita: false},
  {nome: 'Ana', nota: 8.7, bolsita: true},
];
// const resultado = alunos.map(a=>a.nota) // retorna somente a nota dos alunos
// console.log(resultado)

const resultado = alunos
  .map(a => a.nota)
  .reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
  });

console.log(resultado); //soma de todas as notas
