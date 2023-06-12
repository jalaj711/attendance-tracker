/* eslint-disable react-native/no-inline-styles */
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
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  partial_element: {
    opacity: 0.5,
    backgroundColor: 'black',
  },
  text: {
    fontFamily: 'Menlo-Regular',
    lineHeight: 18,
    fontSize: 18,
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
        <View
          style={[
            styles.element,
            {backgroundColor: bgColor, borderColor: bgColor},
          ]}
        />
      ))}
      <View
        style={[
          styles.element,
          {
            width: partialRect,
            borderWidth: 0,
            marginRight: 0,
            backgroundColor: bgColor,
            borderColor: bgColor,
          },
        ]}
      />
      <View
        style={[
          styles.element,
          styles.partial_element,
          {
            width: fullRects < 10 ? 10 - partialRect : 0,
            borderWidth: fullRects % 10 ? 1 : 0,
            marginLeft: 0,
            borderLeftWidth: 0,
            borderColor: bgColor,
          },
        ]}
      />

      {[...Array(fullRects < 10 ? 9 - fullRects : 0)].map(_ => (
        <View
          style={[
            styles.element,
            styles.partial_element,
            {borderColor: bgColor},
          ]}
        />
      ))}
      <Text style={styles.text}>{']'}</Text>
    </View>
  );
}

export default ProgressBar;
