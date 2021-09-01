import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import Product from '../api/Product';

export default function (props) {
  const { header, columns, height, storeId, city, categoryId, name, onPress } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Product.search(storeId, city, name, categoryId).then(({ data }) => setProducts(data));
  }, [props]);

  return (
    <FlatList
      data={products}
      numColumns={columns}
      keyExtractor={item => item._id}
      ListHeaderComponent={header}
      renderItem={({ item }) =>
        <ProductCard
          product={item}
          containerStyle={{ flex: 1 / columns, height }}
          onPress={onPress} />
      }
    />
  );
}