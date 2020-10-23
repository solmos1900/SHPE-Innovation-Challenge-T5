import React from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './style';

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style = {styles.container}>
      <TouchableOpacity style = {styles.button}
        onPress = {() => navigation.navigate('Login')}
      >
        <Text style = {styles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.button}
        onPress = {() => navigation.navigate('Register')}
      >
        <Text style = {styles.text}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Landing;