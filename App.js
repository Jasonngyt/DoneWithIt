import React from 'react';
import { Text } from 'react-native';
import Screen from './app/components/Screen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);

const Stack = createStackNavigator();

const StackNagivator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Tweets' component={Tweets} />
    <Stack.Screen name='TweetDetails' component={TweetDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNagivator />
    </NavigationContainer>
  );
}
