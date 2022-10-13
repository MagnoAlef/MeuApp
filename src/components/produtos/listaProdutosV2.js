import React from 'react';
import {FlatList, Text} from 'react-native';
import estilo from '../estilo';
import produtos from './produtos';
export default props => {
  const renderizarLista = ({item}) => {
    return (
      <Text>
        {item.id} {item.nome} {item.preço}
      </Text>
    );
  };

  return (
    <>
      <Text> Lista de produtos </Text>
      <FlatList data={produtos} renderItem={renderizarLista} />
    </>
  );
};
