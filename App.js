import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from './navigation/screens/TabNavigator';
import Login from './navigation/screens/login';
import AppLoading from "expo-app-loading";
import { useFonts } from "@use-expo/font";
import Discription from './navigation/screens/bookdiscription';
import Reg from './navigation/screens/Register';
import Recover from './navigation/screens/forgetPass';

const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoaded] = useFonts({
    "OleoScript-Bold": require("./assets/fonts/OleoScript-Bold.ttf"),
    "arial": require("./assets/fonts/arial.ttf"),
  });

  if (isLoaded) {
    return (
      <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={Login}></Stack.Screen>
        <Stack.Screen name='TabNavigator' component={TabNavigator}></Stack.Screen>
        <Stack.Screen name='Discription' component={Discription}></Stack.Screen>
        <Stack.Screen name='Reg' component={Reg}></Stack.Screen>
        <Stack.Screen name='Recover' component={Recover}></Stack.Screen>




      </Stack.Navigator>
      
    </NavigationContainer>
  

      
    );
  } else {
    return <AppLoading />;
  }
}

