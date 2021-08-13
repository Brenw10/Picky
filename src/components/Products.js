import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import Product from '../api/Product';

export default function ({ storeId, name, children, columns, height, minQuantity, editable }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const query = { _id: storeId, 'products.name': name, 'products.quantity': minQuantity };
    Product.search(query).then(({ data }) => setProducts(data));
  }, [name]);

  function renderProducts({ item }) {
    return (
      <View style={{ ...styles.row, flex: 1 / columns }}>
        <ProductCard product={item} height={height} storeId={storeId} editable={editable} />
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