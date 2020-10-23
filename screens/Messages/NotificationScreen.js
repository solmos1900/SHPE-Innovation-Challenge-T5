// import * as React from 'react';
// import { Button, View } from 'react-native';

// function NotificationScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           title="Go to Settings"
//           onPress={() => navigation.navigate('Settings')}
//         />
//         <Button title="Go back" onPress={() => navigation.goBack()} />
//       </View>
//     );
//   }

// export default NotificationScreen;

import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

import {View, TouchableOpacity, Button, Text,Platform, StatusBar, Slider,StyleSheet,Image} from 'react-native'
import { SafeAreaView } from 'react-navigation';
 function NotificationScreen(navigation) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
<SafeAreaView style={styles.AndroidSafeArea}>
    <View style={styles.headerContent}>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Home')}>
                <Image style={styles.avatar} source={{uri: 'http://asbarez.com/App/Asbarez/eng/2015/01/fresno-state-library.jpg'}}/>
                </TouchableOpacity>
                </View>
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom:10,
  },
  image:{
    width: 60,
    height: 60,
  },
  headerContent:{
      padding:30,
      alignItems: 'center',
    },
    AndroidSafeArea: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
  
});
export default NotificationScreen;