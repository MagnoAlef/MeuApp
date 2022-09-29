import React from 'react';
import {Text} from 'react-native';
import estilo from './estilo';

export default function Comp() {
  //exportado por padrao usando default // nao e necessario usar uma funcao nomeada
  return <Text style={estilo.txtG}>Comp #Oficial</Text>;
}

export function Comp1() {
  // funcoes que sao importadas sem o default deve usar nome na declaração
  return <Text style={estilo.txtG}>Comp #01</Text>;
}

export function Comp2() {
  return <Text style={estilo.txtG}>Comp #02</Text>;
}
