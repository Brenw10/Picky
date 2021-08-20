import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useUserToken } from '../contexts/UserToken';
import { useAlert } from '../contexts/Alert';
import { useEffect, useState } from 'react';
import User from '../api/User';
import Menu from '../components/Menu';

export default function ({ navigation }) {
  const [user, setUser] = useState();
  const { token, setToken } = useUserToken();
  const { setContent } = useAlert();
  const links = [
    {
      name: 'Criar Conta',
      isVisible: !token,
      onPress: () => navigation.navigate('CreateUser'),
    },
    {
      name: 'Acessar Conta',
      isVisible: !token,
      onPress: () => navigation.navigate('Login'),
    },
    {
      name: 'Adicionar Produto',
      isVisible: user?.store,
      onPress: () => navigation.navigate('CreateProduct', { store: user.store }),
    },
    {
      name: 'Controlar Produtos',
      isVisible: user?.store,
      onPress: () => navigation.navigate('ManageProduct', { store: user.store }),
    },
    {
      name: `Sair de ${user?.name?.split(' ')[0]}`,
      isVisible: user?.name,
      onPress: () => {
        setToken(false);
        setUser();
        setContent('Você saiu da conta');
      },
    },
  ];

  useEffect(() => {
    if (token) User.getMyself(token).then(({ data }) => setUser(data));
  }, [token]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <EvilIcons name="close" size={35} color="#444" />
      </TouchableOpacity>
      <Text style={styles.closeText}>FECHAR</Text>
      {
        user?.store &&
        <>
          <Text style={styles.welcomeText}>LOJA</Text>
          <Text style={styles.userText}>{user.store.name}</Text>
        </>
      }
      <View style={styles.menuContainer}>
        <Menu items={links} onPress={item => item.onPress(item)}
          onVisible={item => item.isVisible} onText={item => item.name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    alignItems: 'center',
    flex: 1,
  },
  welcomeText: {
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Medium' : 'AirbnbCereal-Medium',
  },
  userText: {
    fontFamily: Platform.OS === 'ios' ? 'Airbnb Cereal App Medium' : 'AirbnbCereal-Medium',
  },
  closeText: {
    fontSize: 8,
    marginBottom: 20,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});