import React from 'react';
import Header from '../components/Header';
import { useState } from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import Login from '../api/Login';
import { useAlert } from '../contexts/Alert';
import { useUserToken } from '../contexts/UserToken';

export default function ({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setContent } = useAlert();
  const { setToken } = useUserToken();

  async function login() {
    try {
      const { data } = await Login.getToken(email, password);
      setToken(data);
      setContent('Sucesso no Login');
      navigation.goBack();
    } catch {
      setContent('Dados do Usuário Inválidos');
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header title='Acessar Usuário' navigation={navigation} />
      <ScrollView contentContainerStyle={styles.inputContainer}>
        <Input label='Email' value={email} onChangeText={text => setEmail(text)}
          placeholder='example@example.com'
          leftIcon={<FontAwesome name='envelope-o' size={21} color='#87939e' />}
        />
        <Input label='Senha' value={password} onChangeText={text => setPassword(text)}
          placeholder='Digite sua senha' secureTextEntry={true}
          leftIcon={<FontAwesome name='lock' size={21} color='#87939e' />}
        />
        <Button title='Accessar Conta' onPress={() => login()} />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginHorizontal: 20,
  },
});