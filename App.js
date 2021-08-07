import React from 'react';
import { StyleSheet } from 'react-native';
import StoreNavigation from './src/navigation/Store';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import './src/config/Moment';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import AlertProvider from './src/contexts/Alert';
import UserToken from './src/contexts/UserToken';
import SnackAlert from './src/components/SnackAlert';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4a4a4a',
    background: '#FFF',
  },
};

export default function () {
  return (
    <PaperProvider theme={theme}>
      <AlertProvider>
        <UserToken>
          <SafeAreaView style={styles.safeAreaView}>
            <StoreNavigation />
          </SafeAreaView>
        </UserToken>
        <SnackAlert />
      </AlertProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});