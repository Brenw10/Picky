import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ({ items, onVisible, onText, onPress }) {
  return (
    <>
      {
        items
          .filter(item => onVisible(item))
          .map((item, index) =>
            <TouchableOpacity key={index} style={styles.link} onPress={() => onPress(item)}>
              <Text style={styles.linkText}>{onText(item)}</Text>
            </TouchableOpacity>
          )
      }
    </>
  );
}

const styles = StyleSheet.create({
  link: {
    alignItems: 'center',
    padding: 15,
  },
  linkText: {
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Medium' : 'AirbnbCereal-Medium',
  },
});