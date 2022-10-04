import React, {useState} from 'react';
import {Text} from 'react-native';
import ContadorBotoes from './ContadorBotoes';
import ContadorDisplay from './ContadorDisplay';
export default props => {
  const [num, setNum] = useState(0);
  const inc = () => {
    return setNum(num + 1);
  };
  const dec = () => {
    return setNum(num - 1);
  };
  return (
    <>
      <Text> Hello,Word!!! </Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
    </>
  );
};
