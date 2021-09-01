import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ImageService from '../services/Image';

export default function ({ category, containerStyle, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(category)} style={{ ...styles.container, ...containerStyle }}>
      <View style={{ ...styles.imageContainer, backgroundColor: category.color }}>
        <Image
          source={{ uri: ImageService.getUrlFromPath(category.image) }}
          style={styles.image}
          resizeMode='contain' />
      </View>
      <Text style={styles.title}>{category.name}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 14,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginTop: 5,
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Light' : 'AirbnbCereal-Light',
    fontSize: 12,
  },
});