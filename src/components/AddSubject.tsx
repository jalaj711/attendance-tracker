import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import StyledButton from './Button';
import Input from './Input';
import SubjectType from '../types/SubjectType';

const styles = StyleSheet.create({
  halfWidth: {width: '45%'},
  singleLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  text: {
    fontFamily: 'Menlo-Regular',
    margin: 8,
    color: '#fff',
    alignSelf: 'center',
  },
  button: {margin: 8, alignSelf: 'stretch', alignItems: 'center'},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#000c',
  },
  modalView: {
    marginHorizontal: 16,
    backgroundColor: '#000',
    borderColor: 'white',
    borderWidth: 2,
    padding: 12,
    alignItems: 'center',
    elevation: 5,
  },
  header: {
    fontFamily: 'Menlo-Regular',
    fontSize: 28,
    color: 'white',
    marginVertical: 12,
    paddingHorizontal: 12,
  },
});

function AddSubject(props: {
  show: boolean;
  handleHide: () => any;
  onAdd: (subj: SubjectType) => any;
}) {
  const [subject, setSubject] = useState<SubjectType>({
    id: -1,
    title: '',
    classes_attended: 0,
    classes_total: 0,
    target_level: 0,
    warning_level: 0,
  });
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.show}
      onRequestClose={props.handleHide}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.singleLine}>
            <Text style={styles.header}>Add Subject</Text>
            <StyledButton
              title="x"
              variant="contained"
              style={{margin: 12}}
              onPress={props.handleHide}
            />
          </View>
          {/* <Text
            style={{
              textAlign: 'left',
              letterSpacing: 4,
              alignSelf: 'flex-start',
              marginLeft: 12,
              fontSize: 16,
            }}>
            ///////////////
          </Text> */}
          <Input
            placeholder="Subject Name"
            value={subject.title}
            onChangeText={val => setSubject({...subject, title: val})}
            style={{alignSelf: 'stretch'}}
          />
          <View style={styles.singleLine}>
            <Text style={styles.text}>Classes Attended:</Text>
            <Input
              placeholder="Classes Attended"
              keyboardType="phone-pad"
              style={styles.halfWidth}
              value={subject.classes_attended.toString()}
              onChangeText={val =>
                setSubject({...subject, classes_attended: Number(val)})
              }
            />
          </View>
          <View style={styles.singleLine}>
            <Text style={styles.text}>Total Classes (%):</Text>
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
            onPress={() => {
              props.onAdd(subject);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

export default AddSubject;
