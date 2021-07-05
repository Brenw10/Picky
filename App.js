import React from 'react';
import Navigator from './src/components/Navigator';
import { Provider as PaperProvider } from 'react-native-paper';
import './src/config/Moment';

export default function () {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
};