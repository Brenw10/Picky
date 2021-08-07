import React from 'react';
import Header from '../components/Header';
import { useState } from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import User from '../api/User';
import { useAlert } from '../contexts/Alert';

export default function ({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setContent } = useAlert();

  async function createUser() {
    try {
      await User.create(name, email, password);
      setContent('Conta criada com sucesso!');
      navigation.goBack();
    } catch {
      setContent('Erro ao criar conta!')
    }
  }

  function isValidUser() {
    return name && email && password && confirmPassword;
  }

  function isValidPassword() {
    return password === confirmPassword;
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header title='Criar Usuário' navigation={navigation} />
      <ScrollView contentContainerStyle={styles.inputContainer}>
        <Input label='Nome' value={name} onChangeText={text => setName(text)}
          placeholder='Nome Completo'
          leftIcon={<FontAwesome name='user-o' size={21} color='#87939e' />}
        />
        <Input label='Email' value={email} onChangeText={text => setEmail(text)}
          placeholder='example@example.com'
          leftIcon={<FontAwesome name='envelope-o' size={21} color='#87939e' />}
        />
        <Input label='Senha' value={password} onChangeText={text => setPassword(text)}
          placeholder='Crie uma senha' secureTextEntry={true}
          leftIcon={<FontAwesome name='lock' size={21} color='#87939e' />}
        />
        <Input label='Confirmar Senha' value={confirmPassword} onChangeText={text => setConfirmPassword(text)}
          placeholder='Repita sua senha' secureTextEntry={true}
          errorMessage={isValidPassword() || 'Senhas não se correspondem'}
          leftIcon={<FontAwesome name='lock' size={21} color='#87939e' />}
        />
        <Button title='Criar Usuário' onPress={() => createUser()} disabled={!isValidPassword() || !isValidUser()} />
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