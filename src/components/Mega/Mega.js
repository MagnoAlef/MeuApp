import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import estilo from '../estilo';
import {Component} from 'react';
import MegaNumero from './MegaNumero';
export default class Mega extends Component {
  state = {
    qtdNumeros: this.props.qtdNumeros,
    numeros: [],
  };

  alterarQtdNumero = qtde => {
    this.setState({qtdNumeros: +qtde});
  };
  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  //   gerarNumeros = () => {
  //     const numeros = Array(this.state.qtdNumeros)
  //       .fill()
  //       .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
  //       .sort((a, b) => a - b);
  //     this.setState({numeros});
  //   };
  gerarNumeros = () => {
    const {qtdNumeros} = this.state;
    const numeros = [];
    for (let i = 0; i < qtdNumeros; i++) {
      const n = this.gerarNumeroNaoContido(numeros);
      numeros.push(n);
    }
    numeros.sort((a, b) => a - b);
    this.setState({numeros});
  };
  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map(num => {
      return <MegaNumero num={num} />;
    });
  };
  render() {
    return (
      <>
        <Text style={estilo.txtG}>Gerador de mega sena</Text>
        <TextInput
          keyboardType={'numeric'}
          placeholder="Qtde de Números"
          value={this.state.qtdNumeros}
          onChangeText={this.alterarQtdNumero}
        />
        <Button title="Gerar numeros" onPress={this.gerarNumeros} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {this.exibirNumeros()}
        </View>
        {/* <Text>{this.state.numeros.join(',')}</Text> */}
      </>
    );
  }
}
