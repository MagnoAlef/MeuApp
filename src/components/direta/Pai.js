import React from 'react';
import {Text} from 'react-native';
import Filho from './Filho';
export default props => {
  let x = 22;
  let y = 1000;
  return (
    <>
      <Filho a={x} b={y} />
    </>
  );
};
