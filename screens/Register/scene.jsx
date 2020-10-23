import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import registering from './util';
import styles from './styles';

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>
        <View style = {styles.logoView}>
          <Text style = {styles.title}>Easy Healthy</Text>
        </View>
         <TextInput style = {styles.textInput}
          placeholder='First Name'
          value={firstName}
          onChangeText={setFirstName}
        />
         <TextInput style = {styles.textInput}
          placeholder='Last Name'
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput style = {styles.textInput}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput style = {styles.textInput}
          placeholder='Username'
          value={username}
          onChangeText={setUsername}
        />
        <TextInput style = {styles.textInput}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput style = {styles.textInput}
          placeholder='Confirm Password'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style = {styles.signUpButton}
          onPress={() => {
            navigation.navigate('Home')
            
            const prop = {
              firstName: firstName,
              lastName: lastName,
              email: email,
              username: username,
              password: password
            }
            registering(prop);
          }}
        >
          <Text style = {styles.signUpText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;