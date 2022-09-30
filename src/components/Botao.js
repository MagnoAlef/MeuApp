import React from 'react';
import {Button} from 'react-native';
export default () => {
  function executar(props) {
    console.warn('Hello,Word!!!');
  }
  return (
    <>
      <Button title="Executar!" onPress={executar} />
      <Button
        title="Executar!"
        onPress={function () {
          console.warn('Olá,Mundo!!!');
        }}
      />
    </>
  );
};
