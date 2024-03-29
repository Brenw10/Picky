import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function ({ children, containerStyle, onPress, leftIcon }) {
  return (
    <TouchableOpacity style={{ ...styles.container, ...containerStyle }} onPress={onPress} disabled={!onPress}>
      {
        leftIcon &&
        <Icon name={leftIcon} size={13} color="#444" style={styles.link} />
      }
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
  link: {
    marginRight: 5,
  },
  text: {
    fontSize: 13,
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Light' : 'AirbnbCereal-Light',
    marginRight: 2,
  },
});