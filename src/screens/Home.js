import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';
import SectionSubtitle from '../components/SectionSubtitle';
import ProductCard from '../components/ProductCard';
import Category from '../endpoints/Category';
import City from '../endpoints/City';
import SectionTitle from '../components/SectionTitle';
import Store from '../endpoints/Store';
import Menu from '../components/Menu';
import { Searchbar } from 'react-native-paper';

export default function ({ navigation }) {
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shops, setShops] = useState([]);
  const [city, setCity] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    City.getAll().then(({ data }) => setCities(data));
    Category.getAll().then(({ data }) => setCategories(data));
  }, []);

  useEffect(() => {
    const query = { city: city?.name, name: search, };
    Store.search(query).then(({ data }) => setShops(data));
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

  function renderShopProducts(shop) {
    return shop.products.map(product =>
      <ProductCard
        key={product._id}
        product={product}
        width={150} height={200}
        onPress={() => navigation.navigate('Shop', { shop, search: product.name })}
      />
    );
  }

  function renderShops() {
    return shops.map((shop, index) =>
      <View key={shop._id} style={{ marginTop: index ? 10 : 0 }}>
        <SectionSubtitle leftIcon='shop'
          onPress={() => navigation.navigate('Shop', { shop })}>
          {shop.name}, {shop.district}
        </SectionSubtitle>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {renderShopProducts(shop)}
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
          text={city ? city.name : 'Cidades'} />
      </Header>

      <ScrollView style={styles.container}>
        <Searchbar
          style={styles.search} placeholder='Buscar Lojas'
          value={search} onChangeText={setSearch}
        />

        <SectionSubtitle>Categorias</SectionSubtitle>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {renderCategories()}
        </ScrollView>

        <SectionTitle>LOJAS</SectionTitle>

        {renderShops()}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  search: {
    margin: 10,
    elevation: 0,
    borderBottomWidth: 0.2,
    borderBottomColor: '#AAA',
  },
});