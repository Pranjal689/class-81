import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import drawerNavigator from './navigation/drawernavigator';

 

export default function App() {
  return (
    <NavigationContainer>
       <drawerNavigator/>
    </NavigationContainer>
  );
}