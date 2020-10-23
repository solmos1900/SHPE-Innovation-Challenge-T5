import React, { Component } from 'react';
import { TextInput, Button, View } from 'react-native';
import { useState } from 'react';
import HealthFlatList from './HealthFlatList';
import { posting, displaying } from './utils';

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
  const[calories, setCalories]= useState(0);

  return (
    <View style={{padding: 10}}>      
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
          posting(calories);
      }}/>
      
      <HealthFlatList/>     
    </View>
  );
}

export default HealthSearch;

