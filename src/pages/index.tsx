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
import AddSubject from '../components/AddSubject';
import EditSubject from '../components/EditSubject';

const blackBg = {
  backgroundColor: '#000',
};

function Index(): JSX.Element {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editSubject, setEditSubject] = useState<SubjectType | null>(null);
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

  const handleEditSubject = (_subj: SubjectType) => {
    const subj = subjects.findIndex((s: SubjectType) => s.id === _subj.id);
    if (subj > -1) {
      var subjs_copy = subjects.slice();
      subjs_copy[subj] = _subj;
      setSubjects(subjs_copy);
    }
  };

  const handleDeleteSubject = (_subj: SubjectType) => {
    const subj = subjects.findIndex((s: SubjectType) => s.id === _subj.id);
    if (subj > -1) {
      var subjs_copy = subjects.slice(0, subj).concat(subjects.slice(subj + 1));
      setSubjects(subjs_copy);
    }
  };
  return (
    <ScrollView style={blackBg}>
      <Header onAddSubjectClick={() => setShowAddModal(true)} />
      <AddSubject
        show={showAddModal}
        handleHide={() => setShowAddModal(false)}
        onAdd={subj => {
          setSubjects([...subjects, subj]);
          setShowAddModal(false);
        }}
      />
      <EditSubject
        show={editSubject !== null}
        subject={editSubject}
        handleHide={() => setEditSubject(null)}
        onSave={subj => {
          setEditSubject(null);
          handleEditSubject(subj);
        }}
        onDelete={subj => {
          setEditSubject(null);
          handleDeleteSubject(subj);
        }}
      />
      {subjects.map((subject, index) => (
        <SubjectCard
          subject={subject}
          onClassAdd={handleClassAdd}
          onClassRemove={handleClassAbsent}
          key={index}
          onEditSubjectClick={() => setEditSubject(subject)}
        />
      ))}
    </ScrollView>
  );
}

export default Index;
