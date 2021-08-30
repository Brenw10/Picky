import React, { useState } from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import UserList from '../components/UserList';

export default function ({ navigation }) {
  const [search, setSearch] = useState();

  return (
    <>
      <Header title='Usuários' navigation={navigation} />
      <UserList email={search} onPress={user => navigation.navigate('User', { user })}
        headerComponent={<Searchbar placeholder='Buscar por Email' search={search} onSearch={setSearch} />}
      />
    </>
  );
}