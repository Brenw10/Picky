import React from 'react';
import Navigator from './src/components/Navigator';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import './src/config/Moment';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0d46a1',
  },
};

export default function () {
  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  );
};