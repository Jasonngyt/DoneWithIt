import React from 'react';
import { Text, Button } from 'react-native';
import Screen from './app/components/Screen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title='Click'
      onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details{route.params.id}</Text>
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
