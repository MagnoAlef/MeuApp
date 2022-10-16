import React from 'react';
import {View, StyleSheet} from 'react-native';
export default props => {
  return (
    <View style={style.flexV1}>
      <View style={style.V0}></View>
      <View style={style.V1}></View>
      <View style={style.V2}></View>
    </View>
  );
};
const style = StyleSheet.create({
  flexV1: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000',
  },
  V0: {
    height: 0,
    backgroundColor: '#36c9a7',
  },
  V1: {
    backgroundColor: '#ff801a',
    flexGrow: 1,
  },
  V2: {
    backgroundColor: '#dd22c1',
    flexGrow: 1,
  },
});
