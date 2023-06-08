import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  element: {
    width: 10,
    height: 15,
    marginHorizontal: 1,
    alignSelf: 'flex-start',
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Menlo-Regular',
  },
});

function ProgressBar(props: {percentage: number; bgColor?: string}) {
  const partialRect = props.percentage % 10;
  const fullRects = (props.percentage - partialRect) / 10;
  const bgColor = props.bgColor || '#fff';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'['}</Text>
      {[...Array(fullRects)].map(_ => (
        <View style={[styles.element, {backgroundColor: bgColor}]} />
      ))}
      <View
        style={[
          styles.element,
          {width: partialRect, marginRight: 0, backgroundColor: bgColor},
        ]}
      />
      <View
        style={[
          styles.element,
          {
            backgroundColor: 'black',
            width: fullRects < 10 ? 10 - partialRect : 0,
            marginLeft: 0,
          },
        ]}
      />

      {[...Array(fullRects < 10 ? 9 - fullRects : 0)].map(_ => (
        <View style={[styles.element, {backgroundColor: 'black'}]} />
      ))}
      <Text style={styles.text}>{']'}</Text>
    </View>
  );
}

export default ProgressBar;
