import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Algebra} from '../questions/Algebra';
import HomeScreen from '../components/home';
// import Header from '../header/header';
const Stack = createStackNavigator();

{/* <Stack.Navigator>
<Stack.Screen
  name="Home"
  component={Home}
  options={{
    headerTintColor: 'white',
    headerStyle: { backgroundColor: 'tomato' },
  }}
/> */}

function MyStack() {
  return (
    <Stack.Navigator  >
      <Stack.Screen 
      options={{ headerTintColor : 'white', title: 'Home', headerShown: false,
      headerStyle : { backgroundColor : '#65298A', height:80 }}} 
      name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Algebra" component={Algebra} />
    </Stack.Navigator>
  );
}

export default function StackNavigator() {
  return (
      <MyStack />
  );
}