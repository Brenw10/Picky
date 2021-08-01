import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from '../components/Header';
import CategorySelector from '../components/CategorySelector';
import ProductCard from '../components/ProductCard';
import Searchbar from '../components/Searchbar';
import Product from '../endpoints/Product';

const COLUMNS = 3;

export default function ({ route, navigation }) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(route.params.category);
  const [search, setSearch] = useState();

  useEffect(() => {
    const query = { city: route.params?.city?.name, 'products.name': search };
    Product.searchByCategory(category._id, query).then(({ data }) => setProducts(data));
  }, [category, search]);

  function renderProducts({ item }) {
    return (
      <View style={styles.row}>
        <ProductCard
          onPress={() => navigation.navigate('Store', { store: item.store, search: item.name })}
          product={item} height={180} />
      </View>
    );
  }

  function renderFlatListHeader() {
    return (
      <Searchbar placeholder='Buscar Produtos' onSearch={setSearch} />
    );
  }

  return (
    <>
      <Header title='Categorias' navigation={navigation}>
        <CategorySelector setCategory={setCategory} category={category} />
      </Header>

      <FlatList
        data={products}
        renderItem={renderProducts}
        numColumns={COLUMNS}
        keyExtractor={item => item._id}
        ListHeaderComponent={renderFlatListHeader()}
      />
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1 / COLUMNS,
    marginBottom: 5,
  },
});