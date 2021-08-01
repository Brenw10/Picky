import React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function ({ placeholder, onSearch, wait = 500 }) {
  const [value, setValue] = useState();
  const [searchTimeout, setSearchTimeout] = useState();

  function onChangeText(text) {
    clearTimeout(searchTimeout);
    setValue(text);
    setSearchTimeout(setTimeout(() => onSearch(text), wait));
  }

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