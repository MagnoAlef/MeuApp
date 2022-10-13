import React from 'react';
import {Text} from 'react-native';
import estilo from '../estilo';
import produtos from './produtos';
export default props => {
  function lista() {
    return produtos.map(p => {
      return (
        <Text>
          {p.id} ) {p.nome} tem o preco de {p.preço}
        </Text>
      );
    });
  }
  return (
    <>
      <Text> Lista de produtos </Text>
      {lista()}
    </>
  );
};
