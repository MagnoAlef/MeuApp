import React from 'react';
import {Text} from 'react-native';
import estilo from './estilo';

export default () => {
  console.warn('teste'); // usado para verificar valores de dados
  return <Text style={estilo.txtG}>Primeiro!</Text>;
};
