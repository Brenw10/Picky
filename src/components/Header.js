import moment from 'moment';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{moment(new Date).locale('pt-br').format('dddd, DD MMMM').toUpperCase()}</Text>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderBottomColor: '#f5f4f8',
    borderBottomWidth: 0.03,
    elevation: 3,
  },
  description: {
    color: '#AAA',
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 0,
  },
  title: {
    fontWeight: 'bold',
    margin: 20,
    marginTop: 0,
    fontSize: 25,
  },
});