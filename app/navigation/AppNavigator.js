import React from 'react';
import AccountScreen from '../screens/AccountScreen';
import AccountNavigator from './AccountNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedNavigator from './FeedNavigator';
import ListingsScreen from '../screens/ListingsScreen';
import ListingEditScreen from '../screens/ListingEditScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={FeedNavigator} />
    <Tab.Screen name='ListingEdit' component={ListingEditScreen} />
    <Tab.Screen name='Account' component={AccountNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;
