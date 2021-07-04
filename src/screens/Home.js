import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';
import SectionSubtitle from '../components/SectionSubtitle';
import ProductCard from '../components/ProductCard';
import Category from '../endpoints/Category';
import ShopProduct from '../endpoints/ShopProduct';

export default function () {
  const [categories, setCategories] = useState([]);
  const [shopProducts, setShopProducts] = useState([]);

  useEffect(() => {
    Category.getAll().then(result => setCategories(result));
    ShopProduct.get().then(result => setShopProducts(result));
  }, []);

  function renderCategories() {
    return categories.map(category =>
      <CategoryCard key={category._id} category={category} width={100} height={100} />
    );
  }

  function renderShopProducts() {
    return shopProducts.map(product =>
      <ProductCard key={product._id} product={product} width={150} height={250} />
    );
  }

  return (
    <>
      <Header title='Página Inicial' />
      <ScrollView style={styles.container}>
        <View style={styles.categoryContainer}>
          <SectionSubtitle>Categorias</SectionSubtitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {renderCategories()}
          </ScrollView>
        </View>
        <View style={styles.categoryContainer}>
          <SectionSubtitle>Comercial Esperança, Centro</SectionSubtitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {renderShopProducts()}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
  categoryContainer: {
    marginVertical: 15,
  },
});