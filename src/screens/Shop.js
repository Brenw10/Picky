import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from '../components/Header';
import ShopProduct from '../endpoints/ShopProduct';
import ProductCard from '../components/ProductCard';
import SectionSubtitle from '../components/SectionSubtitle';
import { Searchbar } from 'react-native-paper';

const COLUMNS = 3;

export default function ({ route, navigation }) {
  const [shop, setShop] = useState(route.params.shop);
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

  return (
    <>
      <Header title={shop.name + ', ' + shop.district} navigation={navigation} />

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
              onChangeText={setSearch}
              value={search}
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
  },
  row: {
    flex: 1 / COLUMNS,
    marginBottom: 10,
  },
});