import React from 'react';
import {Text, View, Button} from 'react-native';
import estilo from './estilo';
//export default({min,max}) // maneira mais usada para pegar parametros
export default parametro => {
  console.warn(parametro);
  const {min, max} = parametro; // destructuring , caso eu faca isso posso tirar os parametros abaixo
  const delta = parametro.max - parametro.min + 1; // poderia tira os parametros

  const aleatorio = parseInt(Math.random() * delta) + parametro.min;
  return <Text style={estilo.txtG}>magno {aleatorio}</Text>;
};
