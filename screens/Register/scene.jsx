import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';

const Register = () => {
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
          <Text style = {styles.visaTouchlessText}>Touchless</Text>
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

        <TouchableOpacity style = {styles.signUpButton}>
          <Text style = {styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>

        <View style = {styles.extraOptionsView}>
          <Button title = "Log In"></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;