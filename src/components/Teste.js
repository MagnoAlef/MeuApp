import React from 'react';
import {Text} from 'react-native';
export default ({numero, num}) => {
  function soma() {
    return <Text>{numero + num}</Text>;
  }
  //const soma = numero + num;
  return (
    <>
      <Text>
        a soma entre {numero} + {num} = {soma()}
      </Text>
    </>
  );
};
