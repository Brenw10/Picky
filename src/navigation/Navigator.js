import React from 'react';
import { ScrollView, View } from 'react-native';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';

export default function () {
  return (
    <>
      <Header title='Pagina Inicial' />
      <View style={{ backgroundColor: '#EEE', flex: 1, }}>
        <ScrollView horizontal={true}
          style={{ flexDirection: 'row', paddingVertical: 10 }}
        >
          <CategoryCard
            category={{
              name: 'Bebidas',
              color: '#f7d552',
              image: require('../assets/images/drink.png')
            }}
            width={100} height={100}
          />
          <CategoryCard
            category={{
              name: 'Doces',
              color: '#ab2d2d',
              image: require('../assets/images/chocolate.png')
            }}
            width={100} height={100}
          />
          <CategoryCard
            category={{
              name: 'Padaria',
              color: '#e29c42',
              image: require('../assets/images/bread.png')
            }}
            width={100} height={100}
          />
          <CategoryCard
            category={{
              name: 'Limpeza',
              color: '#95c8ee',
              image: require('../assets/images/soap.png')
            }}
            width={100} height={100}
          />
          <CategoryCard
            category={{
              name: 'Encaixotados',
              color: '#d9a7d7',
              image: require('../assets/images/milk.png')
            }}
            width={100} height={100}
          />
          <CategoryCard
            category={{
              name: 'Açougue',
              color: '#DDD',
              image: require('../assets/images/beef.png')
            }}
            width={100} height={100}
          />
          <CategoryCard
            category={{
              name: 'Enlatados',
              color: '#445f80',
              image: require('../assets/images/tin.png')
            }}
            width={100} height={100}
          />
          <CategoryCard
            category={{
              name: 'Hortifruti',
              color: '#9d74d4',
              image: require('../assets/images/apple.png')
            }}
            width={100} height={100}
          />
          <CategoryCard
            category={{
              name: 'Mantimentos',
              color: '#34825c',
              image: require('../assets/images/rice.png')
            }}
            width={100} height={100}
          />
        </ScrollView>
        <ScrollView horizontal={true}
          style={{ flexDirection: 'row', paddingVertical: 10 }}
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
      </View>
    </>
  );
};