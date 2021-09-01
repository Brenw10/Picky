import React, { useState } from 'react';
import Header from '../components/Header';
import { ScrollView, KeyboardAvoidingView, StyleSheet, Image } from 'react-native';
import { Input } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CategorySelector from '../components/CategorySelector';
import { launchImageLibrary } from 'react-native-image-picker';
import { Button } from 'react-native-elements';
import Product from '../api/Product';
import { useUserToken } from '../contexts/UserToken';
import { useAlert } from '../contexts/Alert';
import String from '../services/String';

export default function ({ navigation, route }) {
  const { store } = route.params;
  const { token } = useUserToken();
  const { setContent } = useAlert();
  const [name, setName] = useState('');
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();

  function onSelectImage() {
    launchImageLibrary(
      { includeBase64: true, mediaType: 'photo' },
      data => setImage(data?.assets?.[0]?.base64)
    );
  }

  async function onSubmit() {
    try {
      await Product.create(token, store._id, { name, image, price: String.toFloat(price), category: category._id });
      setContent('Produto adicionado com sucesso');
      navigation.goBack();
    } catch (err) {
      setContent('Erro ao adicionar produto');
    }

  }

  function isValid() {
    return name && image && price && category;
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header title='Adicionar Produto' navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Button title='Selecionar Imagem' onPress={onSelectImage} buttonStyle={styles.selectImageButton} />
        {
          image &&
          <Image style={styles.image}
            source={{ uri: `data:image/png;base64,${image}` }}
            resizeMode='contain' />
        }
        <Input label='Nome' value={name} onChangeText={text => setName(text)}
          placeholder='Nome do Produto'
          leftIcon={<FontAwesome name='shopping-basket' size={21} color='#87939e' />}
        />
        <Input label='Valor' value={price} onChangeText={text => setPrice(text)}
          placeholder='Valor do Produto' keyboardType='numeric'
          leftIcon={<FontAwesome name='money' size={21} color='#87939e' />}
        />
        <CategorySelector setCategory={setCategory} category={category} />
        <Button title='Criar Produto' buttonStyle={styles.confirmButton} disabled={!isValid()} onPress={onSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  selectImageButton: {
    marginBottom: 20,
  },
  confirmButton: {
    marginTop: 25,
  },
});