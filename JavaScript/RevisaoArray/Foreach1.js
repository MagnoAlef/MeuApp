const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function (nome, indice, array) {
  console.log(`${indice + 1}) ${nome}`); // `` -> Template string //inide + 1 para comecar com 1 e nao 0
  console.log(array);
});
aprovados.forEach(nome => console.log(nome));
