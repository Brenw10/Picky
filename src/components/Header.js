import moment from 'moment';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <TouchableOpacity style={styles.leftButton} onPress={() => navigation.goBack()}>
        <Entypo name="chevron-thin-left" size={25} color="#444" />
      </TouchableOpacity>
    );
  }

  function renderMenu() {
    return (
      <TouchableOpacity style={styles.leftButton} onPress={() => navigation.navigate('Menu')}>
        <Ionicons name="md-menu-outline" size={28} color="#444" />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {navigation?.canGoBack() ? renderBackButton() : renderMenu()}
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
    paddingLeft: 10,
    zIndex: 100,
  },
  leftButton: {
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