import React, { useState } from 'react';
import Header from '../components/Header';
import CategorySelector from '../components/CategorySelector';
import Searchbar from '../components/Searchbar';
import ProductList from '../components/ProductList';

export default function ({ route, navigation }) {
  const [category, setCategory] = useState(route.params.category);
  const [search, setSearch] = useState();

  return (
    <>
      <Header title='Categorias' navigation={navigation}>
        <CategorySelector setCategory={setCategory} category={category} />
      </Header>
      <ProductList columns={3} height={180}
        onPress={product => navigation.navigate('Store', { store: product.store, search: product.name })}
        name={search} categoryId={category._id} city={route.params?.city?._id}
        HeaderComponent={<Searchbar placeholder='Buscar Produtos' onSearch={setSearch} />}
      />
    </>
  );
}