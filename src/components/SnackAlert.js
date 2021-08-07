import React from 'react';
import { StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { useAlert } from '../contexts/Alert';

export default function () {
  const { content, setContent } = useAlert();

  return (
    <Snackbar style={styles.bar} visible={content} onDismiss={() => setContent()}>{content}</Snackbar>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#323232',
  },
});