import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';
export default props => {
  const [nome, setNome] = useState('teste');
  return (
    <>
      <Text> {nome} </Text>
      <TextInput
        placeholder="digite seu nome"
        value={nome}
        onChangeText={nome => setNome(nome)}
      />
    </>
  );
};
