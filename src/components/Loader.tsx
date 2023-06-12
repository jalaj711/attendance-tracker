import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
  },
  element: {
    width: 10,
    height: 15,
    marginHorizontal: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  partial_element: {
    opacity: 0.5,
    backgroundColor: 'black',
  },
  text: {
    fontFamily: 'Menlo-Regular',
    lineHeight: 18,
    fontSize: 18,
  },
});

function Loader(props: {
  loading: boolean;
  showBrackets?: boolean;
  period?: number;
  bgColor?: string;
}) {
  const bgColor = props.bgColor || '#fff';
  const showBrackets =
    props.showBrackets === undefined ? true : props.showBrackets;
  const intervalId = useRef(-1);
  const [stateArr, setStateArr] = useState([1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    if (intervalId.current !== -1) {
      clearInterval(intervalId.current);
    }
    if (props.loading) {
      intervalId.current = setInterval(() => {
        setStateArr(arr =>
          arr.slice(arr.length - 1).concat(arr.slice(0, arr.length - 1)),
        );
      }, props.period || 200);
    }
  }, [props.loading, props.period]);
  return (
    <View style={styles.container}>
      {showBrackets && <Text style={styles.text}>{'['}</Text>}
      {stateArr.map((elem, i) =>
        elem ? (
          <View
            style={[
              styles.element,
              {backgroundColor: bgColor, borderColor: bgColor},
            ]}
            key={'fullrect-' + i}
          />
        ) : (
          <View
            style={[
              styles.element,
              styles.partial_element,
              {borderColor: bgColor},
            ]}
            key={'emptyrect-' + i}
          />
        ),
      )}
      {showBrackets && <Text style={styles.text}>{']'}</Text>}
    </View>
  );
}

export default Loader;
