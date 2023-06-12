/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import SubjectCard from '../components/SubjectCard';
import Header from '../components/Header';
import SubjectType from '../types/SubjectType';
import AddSubject from '../components/AddSubject';
import EditSubject from '../components/EditSubject';
import {
  createSubject,
  deleteSubject,
  loadAll,
  updateSubject,
} from '../utils/storage';
import LoadingScreen from '../components/InitialLoadScreen';

const blackBg = {
  backgroundColor: '#000',
  minHeight: '100%',
};

function Index(): JSX.Element {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editSubject, setEditSubject] = useState<SubjectType | null>(null);
  const [subjects, setSubjects] = useState<SubjectType[]>([]);
  const [subjectIDs, setSubjectIDs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const handleClassAdd = (subj_id: string) => {
    const subj = subjects.findIndex((s: SubjectType) => s.id === subj_id);
    if (subj > -1) {
      var subjs_copy = subjects.slice();
      subjs_copy[subj].classes_attended += 1;
      subjs_copy[subj].classes_total += 1;
      updateSubject(subjs_copy[subj], (error, _) => {
        if (error) {
        } else {
          setSubjects(subjs_copy);
        }
      });
    }
  };
  const handleClassAbsent = (subj_id: string) => {
    const subj = subjects.findIndex((s: SubjectType) => s.id === subj_id);
    if (subj > -1) {
      var subjs_copy = subjects.slice();
      subjs_copy[subj].classes_total += 1;
      updateSubject(subjs_copy[subj], (error, _) => {
        if (error) {
        } else {
          setSubjects(subjs_copy);
        }
      });
    }
  };

  const handleCreateSubject = (_subj: SubjectType) => {
    createSubject(_subj, subjectIDs.slice(), (error, new_subject) => {
      if (error || new_subject === null) {
      } else {
        setSubjects([...subjects, _subj]);
        setSubjectIDs([...subjectIDs, new_subject.id]);
      }
    });
  };

  const handleEditSubject = (_subj: SubjectType) => {
    const subj = subjects.findIndex((s: SubjectType) => s.id === _subj.id);
    if (subj > -1) {
      var subjs_copy = subjects.slice();
      subjs_copy[subj] = _subj;
      updateSubject(subjs_copy[subj], (error, _) => {
        if (error) {
        } else {
          setSubjects(subjs_copy);
        }
      });
    }
  };

  const handleDeleteSubject = (_subj: SubjectType) => {
    const subj = subjects.findIndex((s: SubjectType) => s.id === _subj.id);
    if (subj > -1) {
      var subjs_copy = subjects.slice(0, subj).concat(subjects.slice(subj + 1));
      deleteSubject(_subj, (error, _, ids) => {
        if (error) {
        } else {
          setSubjects(subjs_copy);
          setSubjectIDs(ids || []);
        }
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    loadAll((error, loaded_subjects, loaded_subject_ids) => {
      if (error) {
      } else {
        setLoading(false);
        setSubjects(loaded_subjects || []);
        setSubjectIDs(loaded_subject_ids || []);
      }
    });
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <ScrollView style={blackBg}>
      <Header onAddSubjectClick={() => setShowAddModal(true)} />
      <AddSubject
        show={showAddModal}
        handleHide={() => setShowAddModal(false)}
        onAdd={subj => {
          handleCreateSubject(subj);
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
