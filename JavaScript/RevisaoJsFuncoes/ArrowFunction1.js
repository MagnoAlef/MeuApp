let dobro = function (a) {
  return 2 * a;
};
dobro = a => {
  return 2 * a;
};
dobro = a => 2 * a; /*posso tirar os parenteses quando
tiver somente um parametro e posso tirar o corpo
quando tiver um retorno explicito */

console.log(dobro(2));

let ola = function () {
  return 'Olá';
};

ola = () => 'Ola';

console.log(ola());
