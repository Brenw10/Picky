import React from 'react';
import Navigator from './src/Navigation/Navigator';
import { Provider as PaperProvider } from 'react-native-paper';
import './src/Config/Moment';

export default function () {
  return (
    <PaperProvider >
      <Navigator />
    </PaperProvider>
  );
};