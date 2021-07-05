import moment from 'moment';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ({ title, children, rowReverse }) {

  function renderChildren() {
    return (
      <View style={{ ...styles.rightContainer, alignItems: rowReverse ? 'flex-start' : 'flex-end' }}>
        {children}
      </View>
    );
  }

  return (
    <View style={{ ...styles.container, flexDirection: rowReverse ? 'row-reverse' : 'row' }}>
      <View style={{ ...styles.leftContainer, alignItems: rowReverse ? 'flex-end' : 'flex-start' }}>
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
    justifyContent: 'center',
  },
});