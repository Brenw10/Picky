import moment from 'moment';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ({ title, children }) {

  function renderChildren() {
    return (
      <View style={styles.rightContainer}>
        {children}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.description}>{moment(new Date).locale('pt-br').format('dddd, DD MMMM').toUpperCase()}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children && renderChildren()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderBottomColor: '#000',
    borderBottomWidth: 0.2,
    elevation: 2,
    flexDirection: 'row',
    padding: 20,
  },
  description: {
    color: '#333',
    fontFamily: 'Poppins-Thin',
  },
  title: {
    fontSize: 25,
    color: '#4a4a4a',
    fontFamily: 'AirbnbCereal-Medium',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});