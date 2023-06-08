import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StyledButton from './Button';
import Input from './Input';
import SubjectType from '../types/SubjectType';

const styles = StyleSheet.create({
  halfWidth: {width: '45%'},
  singleLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Menlo-Regular',
    margin: 8,
    color: '#fff',
    alignSelf: 'center',
  },
  button: {margin: 8, alignSelf: 'stretch', alignItems: 'center'},
});

function AddSubject(props: {onAdd: (subj: SubjectType) => any}) {
  const [subject, setSubject] = useState<SubjectType>({
    id: -1,
    title: '',
    classes_attended: 0,
    classes_total: 0,
    target_level: 0,
    warning_level: 0,
  });
  return (
    <View>
      <Input
        placeholder="Subject Name"
        value={subject.title}
        onChangeText={val => setSubject({...subject, title: val})}
      />
      <View style={styles.singleLine}>
        <Input
          placeholder="Classes Attended"
          keyboardType="phone-pad"
          style={styles.halfWidth}
          value={subject.classes_attended.toString()}
          onChangeText={val =>
            setSubject({...subject, classes_attended: Number(val)})
          }
        />
        <Input
          placeholder="Total Classes"
          keyboardType="phone-pad"
          style={styles.halfWidth}
          value={subject.classes_total.toString()}
          onChangeText={val =>
            setSubject({...subject, classes_total: Number(val)})
          }
        />
      </View>
      <View style={styles.singleLine}>
        <Text style={styles.text}>Danger Level (%):</Text>
        <Input
          placeholder="00"
          keyboardType="phone-pad"
          style={styles.halfWidth}
          value={subject.target_level.toString()}
          onChangeText={val =>
            setSubject({...subject, target_level: Number(val)})
          }
        />
      </View>
      <View style={styles.singleLine}>
        <Text style={styles.text}>Warning Level (%):</Text>
        <Input
          placeholder="00"
          keyboardType="phone-pad"
          style={styles.halfWidth}
          value={subject.warning_level.toString()}
          onChangeText={val =>
            setSubject({...subject, warning_level: Number(val)})
          }
        />
      </View>
      <StyledButton
        title="+ Add Subject"
        variant="contained"
        style={styles.button}
        onPress={() => {props.onAdd(subject);console.log('called')}}
      />
    </View>
  );
}

export default AddSubject;
