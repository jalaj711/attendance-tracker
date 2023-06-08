import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: '12px 8px',
    padding: '12px  8px',
    borderRadius: 8,
    minHeight: '100px',
    border: '1px solid white',
  },
});

export default function SubjectCard() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Testing my view</Text>
      </View>
    </View>
  );
}
