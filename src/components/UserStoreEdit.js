import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Searchbar from './Searchbar';
import Store from '../api/Store';
import { ListItem } from 'react-native-elements';
import CitySelector from './CitySelector';
import User from '../api/User';
import { useUserToken } from '../contexts/UserToken';
import { useAlert } from '../contexts/Alert';

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
      await User.setStore(token, user._id, store._id);
      setContent('Nova loja definida com sucesso');
      onSuccess({ ...user, store });
    } catch {
      setContent('Erro ao salvar loja ao usuário');
    }
  }

  return (
    <ScrollView>
      <CitySelector city={city} setCity={setCity} />
      <Searchbar placeholder='Procurar Loja' search={search} onSearch={setSearch} />
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  description: {
    paddingLeft: 10,
    color: 'grey'
  }
})