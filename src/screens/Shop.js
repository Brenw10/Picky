import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from '../components/Header';
import ShopProduct from '../endpoints/ShopProduct';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import { Searchbar } from 'react-native-paper';
import ShopInformation from '../components/ShopInformation';

const COLUMNS = 3;

export default function ({ route, navigation }) {
  const [shop] = useState(route.params.shop);
  const [shopProducts, setShopProducts] = useState([]);
  const [search, setSearch] = useState(route.params.search);

  useEffect(() => {
    ShopProduct.get().then(result => setShopProducts(result));
  }, []);

  function renderShopProducts({ item }) {
    return (
      <View style={styles.row}>
        <ProductCard product={item} height={180} />
      </View>
    );
  }

  function renderFlatListHeader() {
    return (
      <>
        <SectionTitle>Dados da Loja</SectionTitle>
        <ShopInformation containerStyle={styles.shop} shop={shop} />
        <SectionTitle>Produtos</SectionTitle>
        <Searchbar
          style={styles.search}
          placeholder='Buscar Produtos'
          onChangeText={setSearch}
          value={search}
        />
      </>
    );
  }

  return (
    <>
      <Header title='Loja' navigation={navigation} />

      <FlatList
        data={shopProducts}
        renderItem={renderShopProducts}
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
  shop: {
    marginHorizontal: 10,
    elevation: 0,
  },
  search: {
    marginHorizontal: 10,
    marginBottom: 5,
  },
  row: {
    flex: 1 / COLUMNS,
    marginBottom: 10,
  },
});