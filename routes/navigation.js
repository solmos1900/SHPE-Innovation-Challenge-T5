import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screen/login';
import LandingScreen from '../Screen/landing';
//import HomeScreen from '../Screen/HomeScreen';
import NotificationScreen from '../Screen/NotificationScreen';
import MapScreen from '../Screen/MapScreen';
import SettingScreen from '../Screen/SettingsScreen';
import BottomTabNav from '../routes/BottomTabNavigator';

import {
  AsyncStorage,
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

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
    // <NavigationContainer>

    
  
    
        <Stack.Navigator initialRouteName="Login">
          
          <Stack.Screen name='Home' component={BottomTabNav} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Settings" component={SettingScreen} />

        </Stack.Navigator>
    // </NavigationContainer>
  );
}

// export default Navigation;