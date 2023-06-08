import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    margin: 8,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'white',
    fontFamily: 'Menlo-Regular',
  },
});

function Input(props: TextInputProps) {
  const {style, ...otherProps} = props;
  return <TextInput style={[styles.container, style]} {...otherProps} />;
}

export default Input;
