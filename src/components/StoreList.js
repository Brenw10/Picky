import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SectionSubtitle from '../components/SectionSubtitle';
import ProductCard from '../components/ProductCard';
import Store from '../api/Store';

export default function ({ city, name, minProducts, onPress }) {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    Store.search(city, name, minProducts).then(({ data }) => setStores(data));
  }, [city, name, minProducts]);

  return stores.map(store =>
    <View key={store._id}>
      <SectionSubtitle leftIcon='shop' onPress={() => onPress(store)}>
        {store.name}, {store.district}
      </SectionSubtitle>
      <FlatList
        horizontal={true}
        data={store.products}
        keyExtractor={item => item._id}
        renderItem={({ item }) =>
          <ProductCard product={item}
            containerStyle={styles.product}
            onPress={product => onPress(store, product)} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  product: {
    width: 150,
    height: 200,
  },
});