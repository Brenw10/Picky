import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Product from '../api/Product';
import { useUserToken } from '../contexts/UserToken';
import { useAlert } from '../contexts/Alert';
import InputSpinner from "react-native-input-spinner";

export default function ({ product, setProduct }) {
  const { token } = useUserToken();
  const { setContent } = useAlert();

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
    <View style={styles.horizontalContainer}>
      <Text style={styles.itemText}>Quantidade disponível</Text>
      <InputSpinner min={0} value={product?.quantity} onChange={quantity => onChangeQuantity(quantity)} />
    </View>
  )
};

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    alignSelf: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Light' : 'AirbnbCereal-Light',
  },
});