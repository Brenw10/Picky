import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Store from '../screens/Store';
import Menu from '../screens/Menu';
import CreateUser from '../screens/CreateUser';
import { Snackbar } from 'react-native-paper';
import { useAlert } from '../contexts/Alert';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};

export default function () {
  const { content, setContent } = useAlert();

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
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name='Menu' component={Menu} />
          </Stack.Group>
        </Stack.Navigator>
        <Snackbar visible={content} onDismiss={() => setContent()}>{content}</Snackbar>
      </NavigationContainer>
    </>
  );
}