import React from 'react';
import {Text} from 'react-native';
export default ({num}) => {
  return (
    <>
      <Text>o numero {num} é:</Text>
      {num % 2 === 0 ? <Text>par </Text> : <Text>impar</Text>}
    </>
  );
};
