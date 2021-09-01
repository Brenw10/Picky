import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import Category from '../api/Category';
import { FlatList, StyleSheet } from 'react-native';

export default function ({ onPress }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Category.getAll().then(({ data }) => setCategories(data));
  }, []);

  return (
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={item => item._id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) =>
        <CategoryCard
          category={item}
          containerStyle={styles.category}
          onPress={category => onPress(category)} />
      }
    />
  )
}

const styles = StyleSheet.create({
  category: {
    width: 110,
    height: 100,
  },
});