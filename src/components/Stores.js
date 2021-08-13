import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import SectionSubtitle from '../components/SectionSubtitle';
import ProductCard from '../components/ProductCard';
import Store from '../api/Store';

export default function (props) {
  const { cityId, name, productQuantity, onPress } = props;
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const query = {
      city: cityId,
      name,
      'products.quantity': productQuantity,
    };
    Store.search(query).then(({ data }) => setStores(data));
  }, [props]);

  function renderProducts(store) {
    return store.products.map(product =>
      <ProductCard
        key={product._id}
        product={product}
        width={150} height={200}
        onPress={() => onPress(store, product.name)}
      />
    );
  }

  return stores.map(store =>
    <View key={store._id}>
      <SectionSubtitle leftIcon='shop' onPress={() => onPress(store)}>
        {store.name}, {store.district}
      </SectionSubtitle>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {renderProducts(store)}
      </ScrollView>
    </View>
  )
}