import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function ({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: Dimensions.get('window').width / 2,
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.2,
  },
  text: {
    fontSize: 20,
    fontFamily: 'AirbnbCereal-Bold',
    marginRight: 2,
    color: '#555',
    marginBottom: 5,
  },
});