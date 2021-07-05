import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import City from '../endpoints/City';
import Menu from '../components/Menu';

export default function ({ route, navigation }) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState();

  useEffect(() => {
    City.getAll().then(result => setCities(result));
  }, []);

  return (
    <>
      <Header title={route.params.category.name} navigation={navigation}>
      </Header>
    </>
  );
}

const styles = StyleSheet.create({

});