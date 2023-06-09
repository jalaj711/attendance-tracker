import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
import StyledButton from './Button';
import SubjectType from '../types/SubjectType';

const styles = StyleSheet.create({
  container: {
    margin: 12,
    padding: 12,
    minHeight: 100,
    backgroundColor: '#000',
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Menlo-Regular',
    alignSelf: 'center',
  },
  message: {
    fontFamily: 'Menlo-Regular',
    marginBottom: 8,
  },
  percentage: {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 24,
    flexDirection: 'row',
    gap: 12,
  },
});

export default function SubjectCard(props: {
  subject: SubjectType;
  onClassAdd: (id: string) => any;
  onClassRemove: (id: string) => any;
  onEditSubjectClick: () => any;
}) {
  const {subject} = props;
  const percentage = Math.round(
    (subject.classes_attended / subject.classes_total) * 100,
  );
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  React.useEffect(() => {
    const colors = {
      green: '#5eba7d',
      red: '#f27c7c',
      white: '#fff',
      orange: '#f2d17c',
      yellow: '#f2e87c',
    };
    if (percentage >= subject.target_level) {
      if (
        Math.round(
          (subject.classes_attended / (subject.classes_total + 1)) * 100,
        ) >= subject.target_level
      ) {
        setMessage('You can safely miss the next class!');
        setColor(colors.green);
      } else {
        setMessage('You are on track but you cannot miss the next class!');
        setColor(colors.yellow);
      }
    } else {
      const more_classes = Math.round(
        (subject.classes_total * subject.target_level -
          100 * subject.classes_attended) /
          (100 - subject.target_level),
      );
      setMessage(
        'You are falling behind! Attend the next ' +
          more_classes +
          ' classes to get to safe level',
      );
      setColor(colors.red);
    }
  }, [subject, percentage]);
  return (
    <View style={[styles.container]}>
      <View style={{width: '55%'}}>
        <View style={styles.head}>
          <Text style={styles.header}>{subject.title}</Text>
          <StyledButton
            title="[edit]"
            // variant="outlined"
            small
            onPress={props.onEditSubjectClick}
            textStyle={{color: '#aaa'}}
          />
        </View>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.head}>
          <ProgressBar percentage={percentage} bgColor={color} />
          <Text style={[styles.message, {opacity: 0.6}]}>
            {subject.classes_attended}/{subject.classes_total}
          </Text>
        </View>
      </View>
      <View style={styles.percentage}>
        <StyledButton
          small
          variant="outlined"
          title="-"
          onPress={() => props.onClassRemove(subject.id)}
        />
        <Text style={styles.header}>{percentage}%</Text>
        <StyledButton
          small
          variant="contained"
          title="+"
          onPress={() => props.onClassAdd(subject.id)}
        />
      </View>
    </View>
  );
}
