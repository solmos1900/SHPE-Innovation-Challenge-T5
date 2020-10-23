import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View,TextInput, TouchableOpacity, Button, Text,Platform, StatusBar, Slider,StyleSheet,Images } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-navigation';

const GooglePlacesInput = () => {
  return (

     <SafeAreaView style={styles.AndroidSafeArea}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2}
        autoFocus={true}
        returnKeyType={'search'}
        listViewDisplayed={false}
        fetchDetails={true}
        onPress={(data, details = null)=>{
          this.props.notifyChange(details.geometry.location);
        }
      }
        query={{
          key: 'AIzaSyCKTgb1G9VmWVQcUPKu9crBtttu80GoXSc',
          language: 'en', // language of the results
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={200}
      />
      </SafeAreaView>
  );
};
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
 
export default GooglePlacesInput;
