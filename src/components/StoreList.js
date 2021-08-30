import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import SectionSubtitle from '../components/SectionSubtitle';
import ProductCard from '../components/ProductCard';
import Store from '../api/Store';

export default function (props) {
  const { cityId, name, minProducts, onPress } = props;
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const query = { city: cityId, name, minProducts };
    Store.search(query).then(({ data }) => setStores(data));
  }, [props]);

  return stores.map(store =>
    <View key={store._id}>
      <SectionSubtitle leftIcon='shop' onPress={() => onPress(store)}>
        {store.name}, {store.district}
      </SectionSubtitle>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          store.products.map(product =>
            <ProductCard
              key={product._id}
              product={product}
              width={150} height={200}
              onPress={product => onPress(store, product)}
            />
          )
        }
      </ScrollView>
    </View>
  )
}