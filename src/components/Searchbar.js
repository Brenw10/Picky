import React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function ({ value, onChangeText, placeholder }) {
  return (
    <Searchbar
      style={styles.search} placeholder={placeholder}
      value={value} onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  search: {
    margin: 10,
    elevation: 0,
    borderBottomWidth: 0.2,
    borderBottomColor: '#AAA',
  },
});