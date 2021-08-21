import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import Category from '../api/Category';

export default function ({ onPress }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Category.getAll().then(({ data }) => setCategories(data));
  }, []);

  return categories.map(category =>
    <CategoryCard
      key={category._id}
      category={category}
      onPress={category => onPress(category)}
      width={100} height={100} />
  );
}