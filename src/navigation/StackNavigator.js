import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Store from '../screens/Store';
import MainMenu from '../screens/MainMenu';
import CreateUser from '../screens/CreateUser';
import Login from '../screens/Login';
import ManageProduct from '../screens/ManageProduct';
import CreateProduct from '../screens/CreateProduct';

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
            <Stack.Screen name='CreateUser' component={CreateUser} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='ManageProduct' component={ManageProduct} />
            <Stack.Screen name='CreateProduct' component={CreateProduct} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name='MainMenu' component={MainMenu} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}