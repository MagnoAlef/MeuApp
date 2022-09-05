const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // excluir ultimo elemento de um array
console.log(pilotos);

pilotos.push('Verstappen'); // adicionar elemento na ultima posição
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento
console.log(pilotos);
pilotos.unshift('Hamilton'); //adicionar no primeiro elemento
console.log(pilotos);

//splice pode adicionar e remover elementos

//adiconar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);
//remover
pilotos.splice(3, 1); //remover o elemento 3
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array apartir do indice
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // pega do indice ate o outro indice menos 1 nao incluir o indice 4 no caso
console.log(algunsPilotos2);
