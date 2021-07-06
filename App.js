import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './src/components/Navigator';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import './src/config/Moment';
import { SafeAreaView } from 'react-native-safe-area-context';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4a4a4a',
  },
};

export default function () {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});