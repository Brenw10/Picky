import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import GoogleMaps from '../services/GoogleMaps';

export default function ({ store }) {
  return (
    <View>
      <Text style={styles.title}>{store.name.toUpperCase()}</Text>
      <Text style={styles.description}>
        {store.street + ', ' + store.number} - {store.district + ' - ' + store.city}
      </Text>
      <Button icon='map' onPress={() => GoogleMaps.search(`${store.street},${store.number}`)}>
        Abrir no Google Maps
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#4a4a4a',
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Medium' : 'AirbnbCereal-Medium',
    alignSelf: 'center',
    marginBottom: 5,
  },
  description: {
    color: '#4a4a4a',
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Light' : 'AirbnbCereal-Light',
    alignSelf: 'center',
    marginBottom: 5,
  },
});