import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import Product from '../api/Product';

export default function (props) {
  const { header, columns, height, storeId, cityId, categoryId, name, onPress } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Product.search(storeId, cityId, name, categoryId).then(({ data }) => setProducts(data));
  }, [props]);

  function renderProducts({ item }) {
    return (
      <View style={{ ...styles.row, flex: 1 / columns }}>
        <ProductCard product={item} height={height} onPress={onPress} />
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={renderProducts}
      numColumns={columns}
      keyExtractor={item => item._id}
      ListHeaderComponent={header}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    marginBottom: 10,
  },
});