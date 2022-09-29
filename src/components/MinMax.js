import {parseAsync} from '@babel/core';
import React from 'react';
import {Text} from 'react-native';
import estilo from './estilo';

export default props => {
  // como recebir somente um parametro posso tirar o () de props
  return (
    <Text style={estilo.txtG}>
      o valor {props.max} e maior que o valor {props.min}
    </Text>
  );
};
