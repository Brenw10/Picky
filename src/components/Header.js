import moment from 'moment';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function ({ title, children, navigation }) {
  function renderChildren() {
    return (
      <View style={styles.rightContainer}>
        {children}
      </View>
    );
  }

  function renderBackButton() {
    return (
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-thin-left" size={25} color="#444" />
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ ...styles.container, paddingLeft: navigation ? 10 : 20 }}>
      {navigation && renderBackButton()}
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
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backButton: {
    marginRight: 10,
    alignSelf: 'center',
  },
  description: {
    fontSize: 13,
    color: '#333',
    fontFamily: 'Poppins-Thin',
  },
  title: {
    fontSize: 20,
    color: '#4a4a4a',
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Medium' : 'AirbnbCereal-Medium',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});