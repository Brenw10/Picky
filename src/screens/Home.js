import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';
import SectionSubtitle from '../components/SectionSubtitle';
import ProductCard from '../components/ProductCard';
import Category from '../endpoints/Category';
import City from '../endpoints/City';
import SectionTitle from '../components/SectionTitle';
import Store from '../endpoints/Store';
import Menu from '../components/Menu';
import Searchbar from '../components/Searchbar';

export default function ({ navigation }) {
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [stores, setStores] = useState([]);
  const [city, setCity] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    City.getAll().then(({ data }) => setCities(data));
    Category.getAll().then(({ data }) => setCategories(data));
  }, []);

  useEffect(() => {
    const query = { city: city?._id, name: search, };
    Store.search(query).then(({ data }) => setStores(data));
  }, [city, search]);

  function renderCategories() {
    return categories.map(category =>
      <CategoryCard
        key={category._id}
        category={category}
        onPress={() => navigation.navigate('Category', { category, city })}
        width={100} height={100} />
    );
  }

  function renderProducts(store) {
    return store.products.map(product =>
      <ProductCard
        key={product._id}
        product={product}
        width={150} height={200}
        onPress={() => navigation.navigate('Store', { store, search: product.name })}
      />
    );
  }

  function renderStores() {
    return stores.map(store =>
      <View key={store._id}>
        <SectionSubtitle leftIcon='shop'
          onPress={() => navigation.navigate('Store', { store })}>
          {store.name}, {store.district}
        </SectionSubtitle>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {renderProducts(store)}
        </ScrollView>
      </View>
    );
  }

  return (
    <>
      <Header title='Página Inicial'>
        <Menu
          items={cities}
          setSelected={setCity}
          displayField='name'
          text={city?.name || 'Cidades'} />
      </Header>

      <ScrollView>
        <Searchbar placeholder='Buscar Lojas' onSearch={setSearch} />

        <SectionSubtitle>Categorias</SectionSubtitle>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {renderCategories()}
        </ScrollView>

        <SectionTitle>LOJAS</SectionTitle>
        {renderStores()}
      </ScrollView>
    </>
  );
}