import * as React from 'react';
import { Button, View } from 'react-native';

function MapScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Notifications"
          onPress={() => navigation.navigate('Notification')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  
  export default MapScreen;