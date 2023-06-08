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
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Menlo-Regular',
  },
  message: {
    maxWidth: '50%',
    fontFamily: 'Menlo-Regular',
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
  onClassAdd: (id: number) => any;
  onClassRemove: (id: number) => any;
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
      <View style={styles.head}>
        <Text style={styles.header}>{subject.title}</Text>
        <View style={styles.percentage}>
          <StyledButton
            small
            variant="outlined"
            title="-"
            onPress={() => props.onClassRemove(props.subject.id)}
          />
          <Text style={styles.header}>{percentage}%</Text>
          <StyledButton
            small
            variant="contained"
            title="+"
            onPress={() => props.onClassAdd(props.subject.id)}
          />
        </View>
      </View>
      <Text style={styles.message}>{message}</Text>
      <View style={{marginTop: 12, flexDirection: 'row'}}>
        <ProgressBar percentage={percentage} bgColor={color} />
        <Text style={[styles.message, {opacity: 0.6}]}>
          {props.subject.classes_attended}/{props.subject.classes_total}
        </Text>
      </View>
    </View>
  );
}
