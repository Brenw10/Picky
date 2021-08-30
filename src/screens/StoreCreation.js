import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import CreateStore from '../components/CreateStore';
import Header from '../components/Header';

export default function ({ navigation }) {
  return (
    <>
      <Header title='Criar Loja' navigation={navigation} />
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView>
          <CreateStore onSuccess={() => navigation.goBack()} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
});