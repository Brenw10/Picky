import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
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
      <Header title='Pagina Inicial' />
      <View style={{ backgroundColor: '#EEE', flex: 1, }}>
        <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
          {renderCategories()}
        </ScrollView>
      </View>
    </>
  );
}