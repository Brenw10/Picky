import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Category from '../endpoints/Category';
import CategorySelector from '../components/CategorySelector';
import ShopProduct from '../endpoints/ShopProduct';
import ProductCard from '../components/ProductCard';
import SectionSubtitle from '../components/SectionSubtitle';

export default function ({ route, navigation }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(route.params.category);
  const [shopProducts, setShopProducts] = useState([]);

  useEffect(() => {
    Category.getAll().then(result => setCategories(result));
    ShopProduct.get().then(result => setShopProducts(result));
  }, []);

  function renderShopProducts() {
    return shopProducts.map(product =>
      <ProductCard
        key={product._id}
        product={product}
        width={150} height={200} />
    );
  }

  return (
    <>
      <Header title='Categorias' navigation={navigation}>
        <CategorySelector
          categories={categories}
          setCategory={setCategory}
          category={category}
        />
      </Header>

      <ScrollView style={styles.container}>
        <SectionSubtitle containerStyle={styles.subtitle}>Comercial Esperança, Centro</SectionSubtitle>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {renderShopProducts()}
        </ScrollView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 10
  },
});