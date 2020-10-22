// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// export default class LandingScreen extends React.Component {
//     render(){
//   return (
//     <View style={styles.container}>
//       <Text>FUCK</Text>
//       <Button
//           title="Landing"
//           onPress={() => navigation.navigate('login')}/>
          
//        <Text>Text</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// Copy
import * as React from 'react';
import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

const LandingScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NOt fun</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
export default LandingScreen;
