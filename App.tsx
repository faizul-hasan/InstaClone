import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import MainNavigation from '@navigation/MainNavigator';
import { navigationRef } from '@navigation/rootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <NavigationContainer ref={navigationRef}>
          <MainNavigation />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
