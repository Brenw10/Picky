import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Store from '../screens/Store';
import User from '../screens/User';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};

export default function () {
  return (
    <>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Group>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Category' component={Category} />
            <Stack.Screen name='Store' component={Store} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name='User' component={User} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}