import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useUserToken } from '../contexts/UserToken';
import { useAlert } from '../contexts/Alert';

export default function ({ navigation }) {
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
      name: 'Sair da Conta',
      isVisible: token,
      onPress: () => {
        setToken(false);
        setContent('Você saiu da conta');
      },
    },
  ];

  function renderLinks() {
    return links
      .filter(link => link.isVisible)
      .map((link, index) =>
        <TouchableOpacity key={index} style={styles.link}
          onPress={() => link.onPress()}>
          <Text style={styles.linkText}>{link.name}</Text>
        </TouchableOpacity>
      );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <EvilIcons name="close" size={35} color="#444" />
      </TouchableOpacity>
      <Text style={styles.closeText}>FECHAR</Text>
      <View style={styles.linkContainer}>
        {renderLinks()}
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
  closeText: {
    fontSize: 8,
    marginBottom: 20,
  },
  linkContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  link: {
    alignItems: 'center',
    padding: 15,
  },
  linkText: {
    fontFamily: 'AirbnbCereal-Medium',
  },
});