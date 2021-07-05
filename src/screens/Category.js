import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Header from '../components/Header';
import Category from '../endpoints/Category';
import CategorySelector from '../components/CategorySelector';

export default function ({ route, navigation }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(route.params.category);

  useEffect(() => {
    Category.getAll().then(result => setCategories(result));
  }, []);

  return (
    <>
      <Header title={category.name} navigation={navigation}>
        <CategorySelector
          categories={categories}
          setCategory={setCategory}
          category={category}
        />
      </Header>
    </>
  );
}

const styles = StyleSheet.create({

});