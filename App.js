import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from './app/components/Screen';

export default function App() {
  const requestPermission = async () => {
    Permissions.asAsync(Permissions.CAMERA_ROLL);
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library');
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen />;
}
