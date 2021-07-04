import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function ({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Icon name="chevron-thin-right" size={10} color="#444" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'AirbnbCereal-Light',
    marginRight: 2,
  },
});