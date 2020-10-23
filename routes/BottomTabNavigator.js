import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// SCREENS
// import LoginScreen from '../Screen/login';
// import LandingScreen from '../Screen/landing';
import HomeScreen from '../screens/Home/HomeScreen';
import NotificationScreen from '../screens/Messages/NotificationScreen';
import MapScreen from '../screens/MapScreen';
import GooglePlacesInput from '../screens/Google Maps/GooglePlacesTest';  
import MapContainer from '../screens/Google Maps/MapContainer';
// import { exp } from 'react-native-reanimated';
// import gmapsDirections from '../screens/Google Directions/GoogleDirectionsTest';
// import TestApp from '../screens/Nutrition Tracking/TextInput';
import HealthSearch from '../screens/Nutrition Search/HealthSearch';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const BottomTabNav = ({ navigation, route }) => {
  return (
    <BottomTab.Navigator headerMode="none">

      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Home',
        //   tabBarIcon: ({ focused }) => (
        //     <TabBarIcon focused={focused} name='home' />
        //   )
        }}
      />

      <BottomTab.Screen
        name='HealthSearch'
        component={HealthSearch}
        options={{
          title: 'Search',
        //   tabBarIcon: ({ focused }) => (
        //     <TabBarIcon focused={focused} name='home' />
        //   )
        }}
      />
      {/* <BottomTab.Screen
        name='Map'
        component={MapScreen}
        options={{
          title: 'Map',
        //   tabBarIcon: ({ focused }) => (
        //     <TabBarIcon focused={focused} name='home' />
        //   )
        }}
      /> */}
       <BottomTab.Screen
        name='MapCont'
        component={MapContainer}
        options={{
          title: 'Map C',
        //   tabBarIcon: ({ focused }) => (
        //     <TabBarIcon focused={focused} name='home' />
        //   )
        }}
      />
       
      <BottomTab.Screen
        name='Notification'
        component={NotificationScreen}
        options={{
          title: 'Notifications',
        //   tabBarIcon: ({ focused }) => (
        //     <TabBarIcon focused={focused} name='home' />
        //   )
        }}
      />
      <BottomTab.Screen
        name='GoogleTest'
        component={GooglePlacesInput}
        options={{
          title: 'GoogleTest',
        //   tabBarIcon: ({ focused }) => (
        //     <TabBarIcon focused={focused} name='home' />
        //   )
        }}
      />
     
    </BottomTab.Navigator>
  );
};

function getHeaderTitle(route) {
    const routeName =
      route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  
    switch (routeName) {
      case 'Home':
        return 'Home';
  
      case 'Profile':
        return 'Profile';
      case 'Menu':
        return 'Menu';
    }
  }
export default BottomTabNav;