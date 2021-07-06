import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Shop from '../screens/Shop';

const Stack = createStackNavigator();

export default function () {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Shop" component={Shop} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}