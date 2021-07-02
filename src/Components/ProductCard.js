import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import moment from 'moment';

export default function ({ title, image, price, validity, width, height }) {
  return (
    <View style={{ ...styles.container, width, height }}>
      <View style={styles.leftContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{moment(validity).format('DD/MM/YYYY')}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    margin: 5,
    borderRadius: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
  leftContainer: {
    flex: 0.5,
  },
  rightContainer: {
    flex: 0.5,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});