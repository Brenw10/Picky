import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import Product from '../api/Product';

export default function ({ storeId, name, children, columns, height }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const query = { 'products.name': name };
    Product.searchByStore(storeId, query).then(({ data }) => setProducts(data));
  }, [name]);

  function renderProducts({ item }) {
    return (
      <View style={{ ...styles.row, flex: 1 / columns }}>
        <ProductCard product={item} height={height} />
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={products}
        renderItem={renderProducts}
        numColumns={columns}
        keyExtractor={item => item._id}
        ListHeaderComponent={children}
      />
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    marginBottom: 10,
  },
});