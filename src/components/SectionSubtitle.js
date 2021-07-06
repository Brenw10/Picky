import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function ({ children, containerStyle, onPress }) {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...containerStyle }}
      onPress={onPress}
      disabled={!onPress}>
      <Text style={styles.text}>{children}</Text>
      <Icon name="chevron-thin-right" size={10} color="#444" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'AirbnbCereal-Light',
    marginRight: 2,
  },
});