console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // valor daria underfined por nao existir

aprovados[3] = 'Paulo'; // adicionando elemento no indice 3
aprovados.push('Magno');
console.log(aprovados.length); // tamanho do Array
console.log(aprovados[4]);

aprovados[9] = 'Rafael'; // adicao no indice 9 , porem demais itens anteriores ficaram underfined
console.log(aprovados.length);
console.log(aprovados[8] === undefined); //daria true
console.log(aprovados);

aprovados.sort(); // ordenar o array
console.log(aprovados);

delete aprovados[1]; // deleta o elemento , passando o elemento para underfined
console.log(aprovados[1]);

aprovados = ['Bia', 'Carlos', 'Magno'];
aprovados.splice(1, 2); // na altura do indice 1 excluir dois elementos(1,2,'Elemento1',Elemento2)
//excluiria os elemtnos Carlos e Magno e adiconaria Elemento1 e Elemento 2
console.log(aprovados);
