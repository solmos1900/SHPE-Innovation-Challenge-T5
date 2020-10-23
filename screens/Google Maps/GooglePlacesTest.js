import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

const GooglePlacesInput = () => {
  return (
    // <GooglePlacesAutocomplete
    //   placeholder='Search'
    //   onPress={(data, details = null) => {
    //     // 'details' is provided when fetchDetails = true
    //     console.log(data, details);
    //   }}
    //   query={{
    //     key: 'AIzaSyCKTgb1G9VmWVQcUPKu9crBtttu80GoXSc',
    //     language: 'en',
    //   }}
    // />

     <View style={styles.container}>
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
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#ecf0f1',
  },
});
 
export default GooglePlacesInput;