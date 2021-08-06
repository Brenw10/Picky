import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import Searchbar from '../components/Searchbar';
import StoreInformation from '../components/StoreInformation';
import GoogleMaps from '../services/GoogleMaps';
import Icon from 'react-native-vector-icons/FontAwesome';
import Product from '../api/Product';

const COLUMNS = 3;

export default function ({ route, navigation }) {
  const { store } = route.params;
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(route.params.search);

  useEffect(() => {
    const query = { 'products.name': search };
    Product.searchByStore(store._id, query).then(({ data }) => setProducts(data));
  }, [search]);

  function renderProducts({ item }) {
    return (
      <View style={styles.row}>
        <ProductCard product={item} height={180} />
      </View>
    );
  }

  function renderFlatListHeader() {
    return (
      <>
        <StoreInformation store={store} />
        <SectionTitle>Produtos</SectionTitle>
        <Searchbar placeholder='Buscar Produtos' search={search} onSearch={setSearch} />
      </>
    );
  }

  return (
    <>
      <Header title='Loja' navigation={navigation}>
        <Icon.Button name="map-o" backgroundColor='rgba(0,0,0,0)' color='#4a4a4a'
          underlayColor="transparent"
          onPress={() => GoogleMaps.search(`${store.street},${store.number}`)}>
          Google Maps
        </Icon.Button>
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
    marginBottom: 10,
  },
});