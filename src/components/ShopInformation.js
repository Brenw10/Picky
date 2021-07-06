import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import GoogleMaps from '../services/GoogleMaps';

export default function ({ shop, containerStyle }) {
  return (
    <Card style={{ ...containerStyle }}>
      <Card.Title title={shop.name} subtitle={shop.district + ' - ' + shop.city} />
      <Card.Content>
        <Paragraph>{shop.street + ', ' + shop.number}</Paragraph>
      </Card.Content>
      <Card.Actions style={styles.maps}>
        <Button
          icon='map'
          onPress={() => GoogleMaps.search(`${shop.street},${shop.number}`)}>
          Abrir no Google Maps
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  maps: {
    alignSelf: 'center',
  },
});