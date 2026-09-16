import AppNavigation from '@navigation/AppNavigator';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from '@navigation/AuthNavigator';
const MainNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthNavigation} />

      <Stack.Screen name="App" component={AppNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
