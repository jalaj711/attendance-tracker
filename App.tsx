/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import SubjectCard from './src/components/SubjectCard';

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.darker,
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.dark} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          backgroundColor: Colors.darker,
        }}>
        <Header />
        <View
          style={{
            backgroundColor: Colors.black,
          }}>
          <SubjectCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
