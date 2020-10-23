import React, { Component, useEffect } from 'react';
import {View, TextInput, TouchableOpacity, Button, Text,Platform, StatusBar, Slider,StyleSheet,Image} from 'react-native'
import { useState } from 'react';
import HealthFlatList from './HealthFlatList';
import { posting, displaying } from './utils';
import { SafeAreaView } from 'react-navigation';

global.calories = 0;
global.names =[]
// function Search(text) {
    
//     return fetch(
//         // http://127.0.0.1:5059/v1/nutriologist/food/nutrition/"https://api.nal.usda.gov/fdc/v1/food/{item}"
//       `http://0.0.0.0:5000/v1/nutriologist/food/nutrition/apple`
//     )
//       .then((response) => response.json())
//       .then((json) => {
//           console.log(json);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

const search = async (text) => {
  return await fetch(`http://192.168.0.33:8000/v1/nutriologist/food/nutrition/${text}`)
    .then((response) => response.json())
    .then((json) => {
      global.names.push(text);
      global.calories = json.calories.value+calories
    })
    .catch((error) => {
      console.error(error);
  });
}

const HealthSearch = () => {
  const [text, setText] = useState('');
  const [calories, setCalories]= useState(0);
  const [names, setNames] = useState([]); 

  useEffect(() => {
    setNames(displaying());
  }, [])

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>      
      <TextInput
        style={{height: 40}}
        placeholder="Type here to Start Tracking Calories"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />

      <Button 
        title="Search"
        onPress={() => {
          search(text);
          setCalories(global.calories);
          setNames([...names, global.names]);
          posting(calories, global.names);
      }}/>
      
      <HealthFlatList item={names}/>     
    </SafeAreaView>
  );
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
export default HealthSearch;

