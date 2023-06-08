/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import SubjectCard from '../components/SubjectCard';
import Header from '../components/Header';
import SubjectType from '../types/SubjectType';

const blackBg = {
  backgroundColor: '#000',
};

function Index(): JSX.Element {
  const [subjects, setSubjects] = useState<SubjectType[]>([
    {
      id: 0,
      title: 'MAC401',
      classes_attended: 4,
      classes_total: 5,
      target_level: 75,
      warning_level: 80,
    },
    {
      id: 1,
      title: 'EEC401',
      classes_attended: 3,
      classes_total: 5,
      target_level: 75,
      warning_level: 80,
    },
    {
      id: 2,
      title: 'ECC401',
      classes_attended: 31,
      classes_total: 40,
      target_level: 75,
      warning_level: 80,
    },
  ]);

  const handleClassAdd = (subj_id: number) => {
    const subj = subjects.findIndex((s: SubjectType) => s.id === subj_id);
    if (subj > -1) {
      var subjs_copy = subjects.slice();
      subjs_copy[subj].classes_attended += 1;
      subjs_copy[subj].classes_total += 1;
      setSubjects(subjs_copy);
    }
  };
  const handleClassAbsent = (subj_id: number) => {
    const subj = subjects.findIndex((s: SubjectType) => s.id === subj_id);
    if (subj > -1) {
      var subjs_copy = subjects.slice();
      subjs_copy[subj].classes_total += 1;
      setSubjects(subjs_copy);
    }
  };
  return (
    <>
      <Header />
      <ScrollView style={blackBg}>
        {subjects.map((subject, index) => (
          <SubjectCard
            subject={subject}
            onClassAdd={handleClassAdd}
            onClassRemove={handleClassAbsent}
            key={index}
          />
        ))}
      </ScrollView>
    </>
  );
}

export default Index;
