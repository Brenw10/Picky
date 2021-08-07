import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function ({ navigation }) {
  const links = [
    { name: 'Criar Conta', screen: 'CreateUser' },
    { name: 'Acessar Conta', screen: 'Login' },
    { name: 'Adicionar Produto', screen: 'CreateProduct' },
    { name: 'Ver Produtos', screen: 'Products' },
  ];

  function renderLinks() {
    return links.map((link, index) =>
      <TouchableOpacity key={index} style={styles.link}
        onPress={() => navigation.navigate(link.screen)}>
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