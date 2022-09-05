import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet,FlatList, TouchableOpacity ,} from 'react-native';
import Header from '../header/header';

export default function HomeScreen({ navigation }) {
  const [titleName, setTitleName] = useState([
    {name: 'Algebra', key: 1},
    {name:'Fraction,Ratios, and Percents', key:2},
    {name:'Geometry',key:3},
    {name:'Number Properties', key:4}
  ])
  
  return (
    <>
    <View style={styles.back}>
      <FlatList
        data={titleName}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? '#C9D1D1'
                  : 'white'
              },
              styles.wrapperCustom
            ]}
            onPress={() => navigation.navigate('Algebra')}
          >
            <Text style={styles.titleText}>{item.name} </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Algebra');
              } }
              style={styles.button}
            >
              <Text>Press Here</Text>
            </TouchableOpacity>
          </Pressable>
        )} />
    </View></>
  );
}


const styles = StyleSheet.create({
  wrapperCustom:{
    margin: 10,
    borderRadius:5,
  },
  back:{
    flex: 1,
    backgroundColor: "#65298A"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
