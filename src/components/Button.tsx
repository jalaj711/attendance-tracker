import React from 'react';
import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';

const style = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 2,
    alignSelf: 'flex-start',
  },
  outlined: {
    borderColor: '#fff',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  contained: {
    backgroundColor: 'white',
  },
  text: {
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: '900',
    fontFamily: 'Menlo-Regular',
  },
  contained_text: {
    color: 'black',
  },
});

function StyledButton(
  props: PressableProps & {
    title: string;
    variant?: 'outlined' | 'contained' | 'default';
  },
) {
  const {title, variant = 'default', ...otherProps} = props;
  var pressableStyles: any[] = [style.button];
  var textStyles: any[] = [style.text];
  switch (variant) {
    case 'outlined':
      pressableStyles.push(style.outlined);
      break;
    case 'contained':
      pressableStyles.push(style.contained);
      textStyles.push(style.contained_text);
      break;
    default:
      break;
  }
  return (
    <Pressable {...otherProps} style={pressableStyles}>
      <Text style={textStyles}>{title}</Text>
    </Pressable>
  );
}

export default StyledButton;
