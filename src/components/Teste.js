import React from 'react';
import {Text} from 'react-native';
export default ({nome, sobrenome}) => {
  const name = nome || 'Maria';
  const sobrename = sobrenome || 'Castro';
  return (
    <>
      <Text>
        {name} {sobrename}
      </Text>
    </>
  );
};
