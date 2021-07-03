import React from 'react';
import { ScrollView } from 'react-native';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

export default function () {
  return (
    <>
      <Header />
      <ScrollView horizontal={true}
        style={{ backgroundColor: '#EEE', flexDirection: 'row', paddingVertical: 10 }}
      >
        <ProductCard
          product={{
            name: 'Leite Moça',
            price: 3.59,
            image: require('../assets/images/item.jpg')
          }}
          width={150} height={250}
        />
        <ProductCard
          product={{
            name: 'Leite Semidesnatado',
            price: 1.59,
            image: require('../assets/images/item2.jpg')
          }}
          width={150} height={250}
        />
        <ProductCard
          product={{
            name: 'Nescau',
            price: 5.59,
            image: require('../assets/images/item3.jpg')
          }}
          width={150} height={250}
        />
        <ProductCard
          product={{
            name: 'Omo Lavagem',
            price: 4.00,
            image: require('../assets/images/item4.jpg')
          }}
          width={150} height={250}
        />
      </ScrollView>
    </>
  );
};