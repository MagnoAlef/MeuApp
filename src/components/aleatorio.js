import React from 'react';
import {Text, View, Button} from 'react-native';
import estilo from './estilo';
//export default({min,max}) // maneira mais usada para pegar parametros
export default ({min, max}) => {
  const delta = max - min + 1; // poderia tira os parametros
  const aleatorio = parseInt(Math.random() * delta) + min;
  return <Text style={estilo.txtG}>magno {aleatorio}</Text>;
};
