import React from 'react';
import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 2,
    alignSelf: 'flex-start',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  outlined: {
    borderColor: '#fff',
  },
  contained: {
    backgroundColor: 'white',
    borderColor: '#fff',
  },
  small: {
    paddingHorizontal: 8,
    paddingVertical: 4,
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
    small?: boolean;
  },
) {
  const {title, variant = 'default', style, ...otherProps} = props;
  var pressableStyles: any[] = [styles.button];
  var textStyles: any[] = [styles.text];

  switch (variant) {
    case 'outlined':
      pressableStyles.push(styles.outlined);
      break;
    case 'contained':
      pressableStyles.push(styles.contained);
      textStyles.push(styles.contained_text);
      break;
    default:
      break;
  }

  if (props.small) {
    pressableStyles.push(styles.small);
  }

  return (
    <Pressable style={[pressableStyles, style]} {...otherProps}>
      <Text style={textStyles}>{title}</Text>
    </Pressable>
  );
}

export default StyledButton;
