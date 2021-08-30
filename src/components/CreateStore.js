import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import Store from '../api/Store';
import { useUserToken } from '../contexts/UserToken';
import { useAlert } from '../contexts/Alert';

export default function ({ onSuccess }) {
  const [name, setName] = useState('');
  const [district, setDistrict] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const { token } = useUserToken();
  const { setContent } = useAlert();

  async function createStore() {
    try {
      await Store.create(token, { name, district, street, number, city, state });
      setContent('Loja criado com sucesso');
      onSuccess();
    } catch {
      setContent('Erro ao criar Loja');
    }
  }

  function isValid() {
    return name && district && street && number && city && state;
  }

  return (
    <>
      <Input label='Nome' value={name} onChangeText={text => setName(text)}
        placeholder='Digite o nome da loja'
        leftIcon={<FontAwesome name='shopping-cart' size={21} color='#87939e' />}
      />
      <Input label='Estado' value={state} onChangeText={text => setState(text)}
        placeholder='Digite o estado'
        leftIcon={<FontAwesome name='map-o' size={21} color='#87939e' />}
      />
      <Input label='Cidade' value={city} onChangeText={text => setCity(text)}
        placeholder='Digite a cidade'
        leftIcon={<FontAwesome name='map-marker' size={21} color='#87939e' />}
      />
      <Input label='Bairro' value={district} onChangeText={text => setDistrict(text)}
        placeholder='Digite o bairro'
        leftIcon={<FontAwesome name='map-signs' size={21} color='#87939e' />}
      />
      <Input label='Rua' value={street} onChangeText={text => setStreet(text)}
        placeholder='Digite a rua'
        leftIcon={<FontAwesome name='street-view' size={21} color='#87939e' />}
      />
      <Input label='Numero' value={number} onChangeText={text => setNumber(text)}
        placeholder='Digite o numero' keyboardType='numeric'
        leftIcon={<FontAwesome name='building-o' size={21} color='#87939e' />}
      />
      <Button title='Criar Loja' onPress={() => createStore()} disabled={!isValid()} />
    </>
  )
}