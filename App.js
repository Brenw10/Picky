import React from 'react';
import Navigator from './src/components/Navigator';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import './src/config/Moment';

export default function () {
  return (
    <PaperProvider theme={DefaultTheme}>
      <Navigator />
    </PaperProvider>
  );
};