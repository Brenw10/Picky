import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Image from '../services/Image';

export default function ({ product, containerStyle, onPress }) {
  return (
    <TouchableOpacity style={{ ...styles.container, ...containerStyle }}
      onPress={() => onPress(product)} disabled={!onPress}>
      <ImageBackground
        source={{ uri: Image.getUrlFromPath(product.image) }}
        style={styles.image} resizeMode='contain'>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        </View>
      </ImageBackground>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{product.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  priceContainer: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    margin: 5,
    alignSelf: 'flex-end',
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  price: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  detailContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 13,
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Light' : 'AirbnbCereal-Light',
    textAlign: 'center',
  },
});