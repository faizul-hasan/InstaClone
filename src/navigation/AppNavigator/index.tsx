import { createStackNavigator } from '@react-navigation/stack';
import { boolValue } from '@utilities/constants/common';
import route from '@utilities/constants/screens/route';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: boolValue.False }}
      initialRouteName={route.BottomTab}
    >
      <Stack.Screen name={route.BottomTab} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
