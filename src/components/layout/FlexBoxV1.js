import React from 'react';
import {View, StyleSheet} from 'react-native';
import Quadrado from './quadrado';
export default props => {
  return (
    <View style={style.flexV1}>
      <Quadrado cor={'#f00'} />
      <Quadrado cor={'#090'} />
      <Quadrado cor={'#009'} />
    </View>
  );
};
const style = StyleSheet.create({
  flexV1: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
  },
});
