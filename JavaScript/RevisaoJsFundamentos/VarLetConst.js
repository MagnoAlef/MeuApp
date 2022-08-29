var a = 3;
let b = 4;

var a = 30; // usando var posso redeclarar usando a palavra var
b = 40; //nao posso redeclarar usando a palavra let

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5;
// c = 50 nao consigo mudar o valor de uma constante

console.log(c);

// Obs: tentar usar sempre constantes para variaveis que nao
// tiver modificaçoes no codigo
