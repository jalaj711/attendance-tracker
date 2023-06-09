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
    marginTop: 4,
    overflow: 'hidden',
  },
});

function Header(props: {onAddSubjectClick: () => any}) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Attendance Tracker</Text>
      <Text style={{fontFamily: 'Menlo-Regular'}}>
        Some description text in the header
      </Text>
      <View style={{flexDirection: 'row', gap: 12, marginVertical: 24}}>
        <StyledButton
          title="+ Add New Subject"
          variant="contained"
          onPress={props.onAddSubjectClick}
        />
      </View>
      <Text style={styles.divider}>==============</Text>
    </View>
  );
}

export default Header;
