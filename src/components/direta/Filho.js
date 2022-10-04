import React from 'react';
import {Text} from 'react-native';
import Pai from './Pai';
export default props => {
  return (
    <>
      <Text> {props.a}</Text>
      <Text> {props.b}</Text>
    </>
  );
};
