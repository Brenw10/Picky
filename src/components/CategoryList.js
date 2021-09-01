import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import Category from '../api/Category';
import { FlatList } from 'react-native';

export default function ({ onPress, width, height }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Category.getAll().then(({ data }) => setCategories(data));
  }, []);

  return (
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={item => item._id}
      renderItem={({ item }) =>
        <CategoryCard
          category={item}
          containerStyle={{ width, height }}
          onPress={category => onPress(category)} />
      }
    />
  )
}