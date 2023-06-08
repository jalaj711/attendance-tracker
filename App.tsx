/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Index from './src/pages';

const blackBg = {
  backgroundColor: '#000',
};

function App(): JSX.Element {
  return (
    <SafeAreaView style={blackBg}>
      <StatusBar barStyle={'light-content'} backgroundColor="#000" />
      <Index />
    </SafeAreaView>
  );
}

export default App;
