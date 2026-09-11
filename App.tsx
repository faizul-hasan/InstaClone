import MainNavigator from '@navigation/MainNavigator';
import { navigationRef } from '@navigation/rootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
