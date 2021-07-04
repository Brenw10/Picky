import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ({ category, width, height, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.container, width, height }}>
        <View style={{ ...styles.imageContainer, backgroundColor: category.color }}>
          <Image
            source={category.image}
            style={styles.image}
            resizeMode='contain' />
        </View>
        <Text style={styles.title}>{category.name}</Text>
      </View>
    </TouchableOpacity >
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 5,
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
    fontFamily: 'AirbnbCereal-Light',
    fontSize: 12,
  },
});