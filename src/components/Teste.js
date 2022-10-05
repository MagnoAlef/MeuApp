import React from 'react';
import {Text} from 'react-native';
export default props => {
  const numero = 6;
  console.warn(numero);
  if (numero % 2 === 0) {
    return <Text>Magno lindo!!!</Text>;
  }
};
