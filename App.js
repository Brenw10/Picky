import React from 'react';
import { StyleSheet } from 'react-native';
import StoreNavigation from './src/navigation/Store';
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
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.safeAreaView}>
        <StoreNavigation />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});