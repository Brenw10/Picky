import React, { useEffect, useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import { Text, View, StyleSheet } from 'react-native';
import Product from '../api/Product';
import { useUserToken } from '../contexts/UserToken';
import { useAlert } from '../contexts/Alert';
import SectionTitle from './SectionTitle';
import InputSpinner from "react-native-input-spinner";

export default function ({ product, setProduct }) {
  const modalizeRef = useRef(Modalize);
  const { token } = useUserToken();
  const { setContent } = useAlert();

  useEffect(() => {
    if (product) modalizeRef.current?.open();
    else modalizeRef.current?.close();
  }, [product]);

  async function onChangeQuantity(newQuantity) {
    const quantity = product.quantity;
    try {
      setProduct({ ...product, quantity: newQuantity });
      await Product.update(token, product.store._id, product._id, { quantity: newQuantity });
      setContent('Produto alterado com sucesso');
    } catch {
      setProduct({ ...product, quantity: quantity });
      setContent('Falha ao alterar produto');
    }
  };

  return (
    <Modalize ref={modalizeRef} childrenStyle={styles.modal}
      HeaderComponent={<SectionTitle>Modificar Produto</SectionTitle>}
    >
      <View style={styles.horizontalContainer}>
        <Text style={styles.itemText}>Quantidade disponível</Text>
        <InputSpinner min={0} value={product?.quantity} onChange={quantity => onChangeQuantity(quantity)} />
      </View>
    </Modalize>
  )
};

const styles = StyleSheet.create({
  modal: {
    paddingHorizontal: 15,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    alignSelf: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Light' : 'AirbnbCereal-Light',
  },
});