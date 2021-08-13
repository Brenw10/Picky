import React, { useState } from 'react';
import Header from '../components/Header';
import CategorySelector from '../components/CategorySelector';
import Searchbar from '../components/Searchbar';
import Products from '../components/Products';

export default function ({ route, navigation }) {
  const [category, setCategory] = useState(route.params.category);
  const [search, setSearch] = useState();

  return (
    <>
      <Header title='Categorias' navigation={navigation}>
        <CategorySelector setCategory={setCategory} category={category} />
      </Header>
      <Products columns={3} height={180}
        name={search} categoryId={category._id} cityId={route.params?.city?._id} quantity={1}
        header={<Searchbar placeholder='Buscar Produtos' onSearch={setSearch} />}
      />
    </>
  );
}