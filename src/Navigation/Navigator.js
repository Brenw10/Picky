import React from 'react';
import { View, ScrollView } from 'react-native';
import ProductCard from '../Components/ProductCard';
import ProductCard2 from '../Components/ProductCard2';

export default function () {
  return (
    <>

      <ScrollView horizontal={true}
        style={{ backgroundColor: '#EEE', flexDirection: 'row', }}
      >
        <View style={{ height: 250, width: 150, margin: 10 }}>
          <ProductCard2
            title='Leite Moça'
            price={3.59}
            validity={new Date()}
            image={require('../Assets/Images/item.jpg')}
          />
        </View>
        <View style={{ height: 250, width: 150, margin: 10 }}>
          <ProductCard2
            title='Leite Semidesnatado'
            price={1.59}
            validity={new Date()}
            image={require('../Assets/Images/item2.jpg')}
          />
        </View>
        <View style={{ height: 250, width: 150, margin: 10 }}>
          <ProductCard2
            title='Nescau'
            price={5.99}
            validity={new Date()}
            image={require('../Assets/Images/item3.jpg')}
          />
        </View>
        <View style={{ height: 250, width: 150, margin: 10 }}>
          <ProductCard2
            title='Omo Lavagem'
            price={4.00}
            validity={new Date()}
            image={require('../Assets/Images/item4.jpg')}
          />
        </View>
      </ScrollView>

      <ScrollView horizontal={true}
        style={{ backgroundColor: '#EEE', flexDirection: 'row', paddingVertical: 10 }}
      >
        <ProductCard
          title='Leite Moça'
          price={3.59}
          validity={new Date()}
          image={require('../Assets/Images/item.jpg')}
          width={300} height={150}
        />
        <ProductCard
          title='Leite Semidesnatado'
          price={1.59}
          validity={new Date()}
          image={require('../Assets/Images/item2.jpg')}
          width={300} height={150}
        />
        <ProductCard
            title='Nescau'
            price={5.99}
            validity={new Date()}
            image={require('../Assets/Images/item3.jpg')}
            width={300} height={150}
        />
        <ProductCard
            title='Omo Lavagem'
            price={4.00}
            validity={new Date()}
            image={require('../Assets/Images/item4.jpg')}
            width={300} height={150}
        />
      </ScrollView>
    </>
  );
};