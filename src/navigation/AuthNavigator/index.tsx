import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { boolValue } from '@utilities/constants/common';
import screens from '@utilities/constants/screens';
import LoginScreen from '@screens/Auth/Login';
import SignupScreen from '@screens/Auth/Signup';

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: boolValue.False }}
      initialRouteName={screens.login}
    >
      <Stack.Screen name={screens.login} component={LoginScreen} />
      <Stack.Screen name={screens.signup} component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
