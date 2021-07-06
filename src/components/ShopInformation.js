import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import GoogleMaps from '../services/GoogleMaps';

export default function ({ shop, containerStyle }) {
  return (
    <View style={{ ...containerStyle }}>
      <Text style={styles.title}>{shop.name.toUpperCase()}</Text>
      <Text style={styles.description}>
        {shop.street + ', ' + shop.number} - {shop.district + ' - ' + shop.city}
      </Text>
      <Button icon='map'
        onPress={() => GoogleMaps.search(`${shop.street},${shop.number}`)}>
        Abrir no Google Maps
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#4a4a4a',
    fontFamily: 'AirbnbCereal-Medium',
    alignSelf: 'center',
    marginBottom: 5,
  },
  description: {
    color: '#4a4a4a',
    fontFamily: 'AirbnbCereal-Light',
    alignSelf: 'center',
    marginBottom: 5,
  },
});