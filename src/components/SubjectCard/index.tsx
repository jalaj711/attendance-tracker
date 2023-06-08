import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    margin: 12,
    padding: 12,
    borderRadius: 12,
    minHeight: 100,
    borderWidth: 2,
    backgroundColor: '#fff',
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Menlo-Regular',
  },
  percentage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
});

export default function SubjectCard() {
  return (
    <View style={[styles.container]}>
      <View>
        <Text style={styles.header}>Testing my view</Text>
        <Text>Can miss the next class safely</Text>
      </View>

      <View style={styles.percentage}>
        <Text style={styles.header}>26%</Text>
      </View>
    </View>
  );
}
