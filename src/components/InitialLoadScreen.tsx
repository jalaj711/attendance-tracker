import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Loader from './Loader';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    backgroundColor: '#000',
  },
  text: {
    fontFamily: 'Menlo-Regular',
    fontSize: 28,
    color: '#fff',
  },
});

function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading</Text>
      <Loader loading={true} bgColor="#aaaaaa" />
    </View>
  );
}

export default LoadingScreen;
