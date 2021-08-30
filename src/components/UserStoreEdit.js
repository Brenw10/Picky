import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Searchbar from './Searchbar';
import Store from '../api/Store';
import { ListItem } from 'react-native-elements';
import CitySelector from './CitySelector';
import User from '../api/User';
import { useUserToken } from '../contexts/UserToken';
import { useAlert } from '../contexts/Alert';
import { Button } from 'react-native-elements';

export default function ({ user, onSuccess }) {
  const [search, setSearch] = useState();
  const [stores, setStores] = useState([]);
  const [city, setCity] = useState({});
  const { token } = useUserToken();
  const { setContent } = useAlert();

  useEffect(() => {
    Store.search({ name: search, city: city?._id }).then(({ data }) => setStores(data));
  }, [search, city]);

  async function setUserStore(store) {
    try {
      await User.setStore(token, user._id, store?._id);
      setContent('Alteração de Loja definida com sucesso');
      onSuccess({ ...user, store });
    } catch {
      setContent('Erro ao salvar loja ao usuário');
    }
  }

  return (
    <>
      <Button title='Desvincular Loja' onPress={() => setUserStore()} containerStyle={styles.removeButton} />
      <Searchbar placeholder='Procurar Loja' search={search} onSearch={setSearch} />
      <CitySelector city={city} setCity={setCity} />
      {
        stores.map(store =>
          <ListItem key={store._id} onPress={() => setUserStore(store)}>
            <ListItem.Content>
              <ListItem.Title>{store.name}</ListItem.Title>
              <Text style={styles.description}>{`${store.street}, ${store.number}`}</Text>
            </ListItem.Content>
          </ListItem>
        )
      }
    </>
  )
}

const styles = StyleSheet.create({
  removeButton: {
    margin: 10,
  },
  description: {
    paddingLeft: 10,
    color: 'grey'
  },
})