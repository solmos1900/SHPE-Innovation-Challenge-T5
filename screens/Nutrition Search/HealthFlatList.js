import React from 'react';
import { ScrollView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';



const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HealthFlatList = () => {
  const renderItem = ({ item }) => (
    <Item title={item} />
  );

  return (
    <ScrollView >
      <Text>Total Calories:{global.calories}</Text>
      <FlatList
        data={global.names}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
});

export default HealthFlatList;
