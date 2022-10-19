import React from 'react';
import {Text, StyleSheet, Dimensions, TouchableHighlight} from 'react-native';
const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export default props => {
  const stylesButton = [styles.button];
  //Se tiver a props double adicionar o style buttonDouble
  if (props.double) stylesButton.push(styles.buttonDouble);
  //Se tiver a props double adicionar o style buttonTriple
  if (props.triple) stylesButton.push(styles.buttonTriple);
  //Se tiver a props double adicionar o style operationButton
  if (props.operation) stylesButton.push(styles.operationButton);
  return (
    <>
      <TouchableHighlight onPress={props.onClick}>
        {/* tenho que troca o style do text por stylesButton
         <Text style={style.button}>{props.label}</Text> */}
        <Text style={stylesButton}>{props.label}</Text>
      </TouchableHighlight>
    </>
  );
};
