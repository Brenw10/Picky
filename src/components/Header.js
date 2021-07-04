import moment from 'moment';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{moment(new Date).locale('pt-br').format('dddd, DD MMMM').toUpperCase()}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderBottomColor: '#000',
    borderBottomWidth: 0.2,
  },
  description: {
    color: '#333',
    margin: 20,
    marginBottom: 0,
    fontFamily: 'Poppins-Thin',
  },
  title: {
    margin: 20,
    marginTop: 0,
    fontSize: 25,
    color: '#4a4a4a',
    fontFamily: 'AirbnbCereal-Medium',
  },
});