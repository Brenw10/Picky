import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from '../components/Header';
import Category from '../endpoints/Category';
import CategorySelector from '../components/CategorySelector';
import ShopProduct from '../endpoints/ShopProduct';
import ProductCard from '../components/ProductCard';
import SectionSubtitle from '../components/SectionSubtitle';
import { Searchbar } from 'react-native-paper';

const COLUMNS = 3;

export default function ({ route, navigation }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(route.params.category);
  const [shopProducts, setShopProducts] = useState([]);

  useEffect(() => {
    Category.getAll().then(result => setCategories(result));
    ShopProduct.get().then(result => setShopProducts(result));
  }, []);

  function renderShopProducts({ item }) {
    return (
      <View style={styles.row}>
        <ProductCard
          onPress={() => navigation.navigate('Shop', { shop: item.shop, search: item.name })}
          product={item} height={180} />
      </View>
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
        data={shopProducts}
        renderItem={renderShopProducts}
        numColumns={COLUMNS}
        keyExtractor={item => item._id}
        style={styles.container}
        ListHeaderComponent={
          <>
            <Searchbar
              style={styles.search}
              placeholder='Buscar Produtos'
            />
            <SectionSubtitle>Produtos</SectionSubtitle>
          </>
        }
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