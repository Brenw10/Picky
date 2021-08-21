import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import SectionSubtitle from '../components/SectionSubtitle';
import SectionTitle from '../components/SectionTitle';
import Searchbar from '../components/Searchbar';
import CategoryList from '../components/CategoryList';
import CitySelector from '../components/CitySelector';
import Stores from '../components/Stores';

export default function ({ navigation }) {
  const [city, setCity] = useState({});
  const [search, setSearch] = useState();

  return (
    <>
      <Header title='Página Inicial' navigation={navigation}>
        <CitySelector setCity={setCity} city={city} />
      </Header>

      <ScrollView>
        <Searchbar placeholder='Buscar Lojas' onSearch={setSearch} />

        <SectionSubtitle>Categorias</SectionSubtitle>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CategoryList onPress={category => navigation.navigate('Category', { category, city })} />
        </ScrollView>

        <SectionTitle>LOJAS</SectionTitle>
        <Stores cityId={city._id} name={search} productQuantity={1}
          onPress={(store, product) => navigation.navigate('Store', { store, search: product?.name })}
        />
      </ScrollView>
    </>
  );
}