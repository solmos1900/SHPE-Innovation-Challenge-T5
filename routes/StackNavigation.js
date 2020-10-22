import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../screens/Landing/scene';
import Register from '../screens/Register/scene';
import LoginScreen from '../screens/Login/login';
//import HomeScreen from '../Screen/HomeScreen';
import NotificationScreen from '../screens/Messages/NotificationScreen';
import MapScreen from '../screens/MapScreen';
import BottomTabNav from './BottomTabNavigator';
import GooglePlacesInput from '../screens/Google Maps/GooglePlacesTest';

const Stack = createStackNavigator();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
export default function Navigation({ navigation }) { 
  // const [state, dispatch] = React.useReducer(
  //   (prevState, action) => {
  //     switch (action.type) {
  //       case 'RESTORE_TOKEN':
  //         return {
  //           ...prevState,
  //           userToken: action.token,
  //           isLoading: false,
  //         };
  //       case 'SIGN_IN':
  //         return {
  //           ...prevState,
  //           isSignout: false,
  //           userToken: action.token,
  //         };
  //       case 'SIGN_OUT':
  //         return {
  //           ...prevState,
  //           isSignout: true,
  //           userToken: null,
  //         };
  //     }
  //   },
  //   {
  //     isLoading: false,
  //     isSignout: false,
  //     userToken: null,
  //   }
  // );
  return (
    <Stack.Navigator initialRouteName='Landing'>
      <Stack.Screen name='Landing' component={Landing} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Home' component={BottomTabNav} options={{ headerShown: false }} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="GoogleTest" component={GooglePlacesInput} />
    </Stack.Navigator>
  );
}