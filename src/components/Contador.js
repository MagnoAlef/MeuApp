import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import estilo from './estilo';

export default ({inicial = 0, passo = 1}) => {
  const delta = inicial + 5
  const [count, setCount] = useState(delta);
  const incrementa = () => {
    setCount(count + passo);
  };
  const decrementa = () => {
    setCount(count - passo);
  };
  return (
    <>
      <Text>{count}</Text>
      <Button title="+" onPress={incrementa} />
      <Button title="-" onPress={decrementa} />
    </>
  );
};
