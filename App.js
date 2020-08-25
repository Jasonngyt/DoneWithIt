import React, { useState } from 'react';

import Screen from './app/components/Screen';
import { TextInput, Text } from 'react-native';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  const [firstName, setFirstName] = useState('');

  return (
    <Screen>
      <AppTextInput placeholder='Username' icon='email' />
    </Screen>
  );
}
