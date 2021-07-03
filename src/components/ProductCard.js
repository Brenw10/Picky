import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

export default function ({ product, width, height }) {
  return (
    <View style={{ ...styles.container, width, height }}>
      <ImageBackground source={product.image} style={styles.image} resizeMode='contain'>
        <View style={{ ...styles.priceContainer, ...styles.rounded }}>
          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        </View>
      </ImageBackground>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{product.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    margin: 5,
    borderWidth: 0.1,
  },
  image: {
    flex: 0.85,
    justifyContent: 'flex-end',
    backgroundColor: '#FFF',
  },
  priceContainer: {
    backgroundColor: '#FFF',
    margin: 5,
    alignSelf: 'flex-end',
  },
  price: {
    fontSize: 13,
  },
  detailContainer: {
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
    elevation: 2,
    borderWidth: 0.05,
  },
});