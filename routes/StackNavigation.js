import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../screens/Landing/scene';
import Register from '../screens/Register/scene';
import LoginScreen from '../screens/Login/login';
import BottomTabNav from './BottomTabNavigator';

const Stack = createStackNavigator();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
export default function Navigation() { 
  return (
    <Stack.Navigator initialRouteName='Landing'>
      <Stack.Screen name='Landing' component={Landing} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Home' component={BottomTabNav} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
