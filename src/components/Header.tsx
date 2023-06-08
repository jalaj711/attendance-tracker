import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StyledButton from './Button';

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Menlo-Regular',
  },
  headerContainer: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  divider: {
    fontSize: 24,
    letterSpacing: 4,
    marginTop: 12,
    overflow: 'hidden',
  },
});

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Attendance Tracker</Text>
      <StyledButton title="Add New Subject" />
      <StyledButton title="Add New Subject" variant="contained" />
      <StyledButton title="Add New Subject" variant="outlined" />
      <Text style={[styles.header, styles.divider]}>==============</Text>
    </View>
  );
}

export default Header;
