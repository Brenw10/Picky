import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import UserList from '../components/UserList';
import { Modalize } from 'react-native-modalize';
import SectionTitle from '../components/SectionTitle';
import UserStoreEdit from '../components/UserStoreEdit';

export default function ({ navigation }) {
  const [search, setSearch] = useState();
  const [user, setUser] = useState();
  const modalizeRef = useRef(Modalize);

  useEffect(() => {
    if (user) modalizeRef.current?.open();
    else modalizeRef.current?.close();
  }, [user]);

  return (
    <>
      <Header title='Usuários' navigation={navigation} />
      <UserList email={search} onPress={user => setUser(user)}
        HeaderComponent={<Searchbar placeholder='Buscar por Email' search={search} onSearch={setSearch} />}
      />
      <Modalize ref={modalizeRef}
        HeaderComponent={<SectionTitle>Selecione uma Loja</SectionTitle>}>
        <UserStoreEdit user={user} onSuccess={() => setUser()} />
      </Modalize>
    </>
  );
}