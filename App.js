import React, { useState } from 'react';

import Screen from './app/components/Screen';
import { TextInput, Text } from 'react-native';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  const [isNew], setIsNew = useState(false);

  return (
    <Screen>
      <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)} />
    </Screen>
  );
}
