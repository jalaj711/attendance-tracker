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
import ProgressBar from '../components/ProgressBar';

const blackBg = {
  backgroundColor: '#000',
};

function Index(): JSX.Element {
  return (
    <>
      <Header />
      <ProgressBar percentage={100} bgColor="#5eba7d" />
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
