import React, { useState } from 'react';
import Header from '../components/Header';
import GoogleMaps from '../services/GoogleMaps';
import Icon from 'react-native-vector-icons/FontAwesome';
import Products from '../components/Products';
import StoreInformation from '../components/StoreInformation';
import SectionTitle from '../components/SectionTitle';
import Searchbar from '../components/Searchbar';

export default function ({ route, navigation }) {
  const { store } = route.params;
  const [search, setSearch] = useState(route.params.search);

  return (
    <>
      <Header title='Loja' navigation={navigation}>
        <Icon.Button name='map-o' backgroundColor='rgba(0,0,0,0)'
          underlayColor='transparent' color='#4a4a4a'
          onPress={() => GoogleMaps.search(`${store.street},${store.number}`)}>
          Google Maps
        </Icon.Button>
      </Header>
      <Products storeId={store._id} name={search} columns={3} height={180} minQuantity={1}>
        <>
          <StoreInformation store={store} />
          <SectionTitle>Produtos</SectionTitle>
          <Searchbar placeholder='Buscar Produtos' search={search} onSearch={setSearch} />
        </>
      </Products>
    </>
  );
}