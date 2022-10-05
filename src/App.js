import React from 'react';
import {View, StyleSheet} from 'react-native';
import './components/Primeiro';
import Primeiro from './components/Primeiro';
import Comp, {Comp1, Comp2} from './components/multi';
import MinMAx from './components/MinMax';
import Aleatorio from './components/aleatorio';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';
import ContadorV2 from './components/contador/ContadorV2';
//import Pai from './components/direta/Pai';
import Pai from './components/relacao/Pai';
import Diferenciar from './components/Diferenciar';
import ParImpar from './components/ParImpar';
import Teste from './components/Teste';
import Filho from './components/relacao/Filho';
export default () => (
  <View style={style.App}>
    <ContadorV2 />
    {/* <Comp />
    <Comp1 />
    <Comp2 />
    <Primeiro />
    <MinMAx min={3} max={20} />
    <Aleatorio min={1} max={60} />
    <Titulo principal="Cadastro" secundario="Tela de produto" />
    <Botao />
    <Contador inicial={100} passo={22} />
    <Contador />
    <Pai />
    <Pai /> */}
    <Diferenciar />
    <ParImpar num={6} />
    <Teste />
    <Pai>
      <Filho nome='magno' sobrenome='barroso' />
      <Filho nome='juliana' sobrenome='barroso' />
    </Pai>
  </View>
);
const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
