import React, { useState } from 'react';
import Header from '../components/Header';
import Products from '../components/Products';
import Searchbar from '../components/Searchbar';

export default function ({ navigation, route }) {
  const { store } = route.params;
  const [search, setSearch] = useState();

  return (
    <>
      <Header title='Controlar Produtos' navigation={navigation} />
      <Products storeId={store._id} name={search} columns={3} height={180} editable={true}
        header={<Searchbar placeholder='Buscar Produtos' search={search} onSearch={setSearch} />}
      />
    </>
  )
};