import React from 'react';
import { Button, View, useState } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/home';
import CustomDrawer from  './customDrawer/CustomDrawer';
import NotificationsScreen from './components/notificationsScreen';
import StackNavigator from './customDrawer/stackNavigator';
export default function App() {
  
  
  const globalScreenOptions = {
    headerStyle: { backgroundColor: "#65298A" },
    headerTitleStyle: { color: "white",  },
    headerTintColor: "white",
    
  };
//(props: { color: string })
  const Drawer = createDrawerNavigator();

  return (
    
      <NavigationContainer  >
        <Drawer.Navigator
          screenOptions={globalScreenOptions}
          drawerContent={(props) => <CustomDrawer {...props}/>  }
          useLegacyImplementation initialRouteName="Home"
          >
            <Drawer.Screen options={{ headerShown: true }} name="Home" component={StackNavigator} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    
  );
}
// import React, { useState } from "react";
// import { Text, StyleSheet } from "react-native";

// const TextInANest = () => {
  
//   const [value , setValue] = useState(0);
//   const titleName = [
//       {question:'This is Question 1',answer: 'This is answer 1', key: 1},
//       {question:'This is Question 2',answer: 'This is answer 2', key:2},
//       {question:'This is Question 3',answer: 'This is answer 3', key:3},
//       {question:'This is Question 4',answer: 'This is answer 4', key:4},
//   ]
//   const [titleText, setTitleText] = useState("Bird's Nest");
//   const bodyText = "This is not really a bird nest.";
//   const [getbool, setgetbool] = useState(true);
//   const onPressTitle = () => {
//     setTitleText("Bird's Nest [pressed]");
//     if(getbool){
//       setgetbool(false);
//       setTitleText("no")
//     }
//   };

//   return (
//     <Text style={styles.baseText} onPress={onPressTitle} >
//       <Text style={styles.titleText} >
//         {titleText}
//         {"\n"}
//         {"\n"}
//       </Text>
//       <Text numberOfLines={5}>{titleName[value].question}</Text>
//     </Text>
//   );
// };

// const styles = StyleSheet.create({
//   baseText: {
//     padding:40,
//     backgroundColor: 'green'
//   },
//   titleText: {
//     fontSize: 30,
//     fontWeight: "bold"
//   }
// });

// export default TextInANest;