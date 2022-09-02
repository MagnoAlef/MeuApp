//this pode variar usando function normais
//usando Arrow function nap varia
const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao);
  },
};
pessoa.falar();
const falar = pessoa.falar; // tenho que usar o bind
falar(); // conflito entre paradigmas funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();
