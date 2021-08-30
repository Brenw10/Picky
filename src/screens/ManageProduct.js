import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import ProductEdit from '../components/ProductEdit';
import ProductList from '../components/ProductList';
import Searchbar from '../components/Searchbar';
import { Modalize } from 'react-native-modalize';
import SectionTitle from '../components/SectionTitle';
import { StyleSheet } from 'react-native';

export default function ({ navigation, route }) {
  const { store } = route.params;
  const modalizeRef = useRef(Modalize);
  const [search, setSearch] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    if (product) modalizeRef.current?.open();
    else modalizeRef.current?.close();
  }, [product]);

  return (
    <>
      <Header title='Controlar Produtos' navigation={navigation} />
      <ProductList storeId={store._id} name={search} columns={3} height={180} onPress={setProduct}
        header={<Searchbar placeholder='Buscar Produtos' search={search} onSearch={setSearch} />}
      />
      <Modalize ref={modalizeRef} childrenStyle={styles.modal}
        HeaderComponent={<SectionTitle>Modificar Produto</SectionTitle>}>
        <ProductEdit product={product} setProduct={setProduct} />
      </Modalize>
    </>
  )
};

const styles = StyleSheet.create({
  modal: {
    paddingHorizontal: 15,
  },
});