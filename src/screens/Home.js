import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';
import Category from '../endpoints/Category';

export default function () {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Category.getAll().then(result => setCategories(result));
  }, []);

  function renderCategories() {
    return categories.map(category =>
      <CategoryCard key={category._id} category={category} width={100} height={100} />
    );
  }

  return (
    <>
      <Header title='Página Inicial' />
      <ScrollView style={styles.container}>
        <ScrollView horizontal={true} style={styles.categoryContainer}>
          {renderCategories()}
        </ScrollView>
      </ScrollView>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
  categoryContainer: {
    marginVertical: 10,
  },
});