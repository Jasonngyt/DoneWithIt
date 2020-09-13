import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigation';
import NavigationTheme from './app/navigation/NavigationTheme';

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
