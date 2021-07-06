import React from 'react';
import Navigator from './src/components/Navigator';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import './src/config/Moment';

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
      <Navigator />
    </PaperProvider>
  );
};