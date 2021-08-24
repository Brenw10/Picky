import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import SectionSubtitle from '../components/SectionSubtitle';
import SectionTitle from '../components/SectionTitle';
import Searchbar from '../components/Searchbar';
import CategoryList from '../components/CategoryList';
import CitySelector from '../components/CitySelector';
import StoreList from '../components/StoreList';

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
          <CategoryList width={100} height={100}
            onPress={category => navigation.navigate('Category', { category, city })}
          />
        </ScrollView>

        <SectionTitle>LOJAS</SectionTitle>
        <StoreList cityId={city._id} name={search}
          onPress={(store, product) => navigation.navigate('Store', { store, search: product?.name })}
        />
      </ScrollView>
    </>
  );
}