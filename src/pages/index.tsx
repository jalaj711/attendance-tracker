/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView} from 'react-native';

import SubjectCard from '../components/SubjectCard';
import Header from '../components/Header';

const blackBg = {
  backgroundColor: '#000',
};

function Index(): JSX.Element {
  return (
    <>
      <Header />
      <ScrollView style={blackBg}>
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
      </ScrollView>
    </>
  );
}

export default Index;
