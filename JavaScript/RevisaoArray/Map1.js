//map -> Serve para mapear os elementos de um array para outro
//map -> nao tranforma o array
const numeros = [1, 2, 3, 4, 5];

//For com Proposito
let resultado = numeros.map(function (e) {
  // criando outro array encima do atual com map
  return e * 2;
});
console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;
console.log(soma10(10));
console.log(triplo(7));
console.log(paraDinheiro(12.68739));

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro); //multiplicou por 10 , triplicou e mostrou formatado
console.log(resultado);
