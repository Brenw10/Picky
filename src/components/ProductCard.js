import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';

export default function ({ product, width, height, onPress }) {
  return (
    <TouchableOpacity style={{ ...styles.container, width, height }} onPress={onPress}>
      <ImageBackground source={product.image} style={styles.image} resizeMode='contain'>
        <View style={{ ...styles.priceContainer, ...styles.rounded }}>
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
    margin: 5,
    borderWidth: 0.1,
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 0.2,
    borderColor: '#AAA',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  priceContainer: {
    backgroundColor: '#FFF',
    margin: 5,
    alignSelf: 'flex-end',
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
    fontFamily: 'AirbnbCereal-Book',
  },
  rounded: {
    borderRadius: 100,
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderWidth: 0.05,
  },
});