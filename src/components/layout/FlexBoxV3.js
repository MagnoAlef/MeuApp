import React from 'react';
import {View, StyleSheet} from 'react-native';
import Quadrado from './quadrado';
export default props => {
  return (
    <View style={style.flexV1}>
      <Quadrado cor={'#f00'} lado={20} />
      <Quadrado cor={'#090'} lado={30} />
      <Quadrado cor={'#009'} lado={40} />
    </View>
  );
};
const style = StyleSheet.create({
  flexV1: {
    height: 350,
    width: '100%',
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
});
