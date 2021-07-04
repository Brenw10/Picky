import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';
import SectionSubtitle from '../components/SectionSubtitle';
import ProductCard from '../components/ProductCard';
import Category from '../endpoints/Category';
import ShopProduct from '../endpoints/ShopProduct';
import SectionTitle from '../components/SectionTitle';

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
      <ProductCard key={product._id} product={product} width={150} height={200} />
    );
  }

  function renderShopProductsMockup() {
    return [...shopProducts].reverse().map(product =>
      <ProductCard key={product._id} product={product} width={150} height={200} />
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

        <SectionTitle>LOJAS</SectionTitle>
        <View style={{ ...styles.productContainer, marginTop: 0 }}>
          <SectionSubtitle>Comercial Esperança, Centro</SectionSubtitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {renderShopProducts()}
          </ScrollView>
        </View>
        <View style={styles.productContainer}>
          <SectionSubtitle>Extra, Centro</SectionSubtitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {renderShopProductsMockup()}
          </ScrollView>
        </View>
        <View style={styles.productContainer}>
          <SectionSubtitle>Piratininga, Jardim Paulista</SectionSubtitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {renderShopProducts()}
          </ScrollView>
        </View>
        <View style={styles.productContainer}>
          <SectionSubtitle>Sonda, Jardim Paulista</SectionSubtitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {renderShopProductsMockup()}
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
    marginTop: 10,
  },
  productContainer: {
    marginVertical: 15,
  },
});