import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from '../components/Header';
import Category from '../endpoints/Category';
import CategorySelector from '../components/CategorySelector';
import ProductCard from '../components/ProductCard';
import { Searchbar } from 'react-native-paper';
import Product from '../endpoints/Product';

const COLUMNS = 3;

export default function ({ route, navigation }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(route.params.category);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    Category.getAll().then(({ data }) => setCategories(data));
  }, []);

  useEffect(() => {
    const query = { city: route.params?.city?.name, 'products.name': search };
    Product.searchByCategory(category._id, query).then(({ data }) => setProducts(data));
  }, [category, search]);

  function renderProducts({ item }) {
    return (
      <View style={styles.row}>
        <ProductCard
          onPress={() => navigation.navigate('Shop', { shop: item.store, search: item.name })}
          product={item} height={180} />
      </View>
    );
  }

  function renderFlatListHeader() {
    return (
      <Searchbar
        style={styles.search} placeholder='Buscar Produtos'
        value={search} onChangeText={setSearch}
      />
    );
  }

  return (
    <>
      <Header title='Categorias' navigation={navigation}>
        <CategorySelector
          categories={categories}
          setCategory={setCategory}
          category={category}
        />
      </Header>

      <FlatList
        data={products}
        renderItem={renderProducts}
        numColumns={COLUMNS}
        keyExtractor={item => item._id}
        style={styles.container}
        ListHeaderComponent={renderFlatListHeader()}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  search: {
    margin: 10,
    elevation: 0,
    borderBottomWidth: 0.2,
    borderBottomColor: '#AAA',
  },
  row: {
    flex: 1 / COLUMNS,
    marginBottom: 5,
  },
});