import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navigation from './routes/navigation';

// export default App = () => {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Wrong Page
//       </Text>
//      <Navigation> </Navigation>  */}
//       {/* <Button
//            title="Add some friends"
//            onPress={() =>
//              this.props.navigation.navigate('Landing')}/> */}
         
          
//        {/* <Text>Text</Text>
//       <StatusBar style="auto" />  */}
//     </View>
//   );
// }
export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

