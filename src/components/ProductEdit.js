import React from 'react';
import Product from '../api/Product';
import { useUserToken } from '../contexts/UserToken';
import { useAlert } from '../contexts/Alert';
import { Button } from 'react-native-elements';

export default function ({ product, setProduct }) {
  const { token } = useUserToken();
  const { setContent } = useAlert();

  async function onDelete() {
    try {
      await Product.remove(token, product.store._id, product._id);
      setContent('Produto removido com sucesso');
      setProduct();
    } catch {
      setContent('Erro ao remover produto');
    }
  }

  return (
    <Button title='Deletar Produto' onPress={() => onDelete()} />
  )
};