import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import moment from 'moment';

export default function ({ title, image, price, validity }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={{ ...styles.rounded, ...styles.imageTop }}>
          <Text style={styles.validity}>
            Validade: {moment(validity).format('DD/MM/YYYY')}
          </Text>
        </View>
        <View style={styles.imageBottom}>
          <View style={{ ...styles.priceContainer, ...styles.rounded }}>
            <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.bottom}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#FFF',
  },
  image: {
    flex: 0.85,
    resizeMode: 'center',
  },
  imageTop: {
    backgroundColor: '#FFF',
    margin: 5,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#06c167',
  },
  validity: {
    fontSize: 10,
  },
  imageBottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  priceContainer: {
    backgroundColor: '#FFF',
    margin: 5,
    alignSelf: 'flex-end',
  },
  price: {
    fontSize: 13,
  },
  bottom: {
    flex: 0.15,
    backgroundColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  rounded: {
    borderRadius: 100,
    paddingVertical: 2,
    paddingHorizontal: 12,
    elevation: 5,
    borderWidth: 0.05,
  },
});