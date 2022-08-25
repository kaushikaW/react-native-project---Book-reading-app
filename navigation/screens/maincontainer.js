import * as React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";


// screens
import Home from "./home";
import Library from "./Libraries";
import Catogeries from "./catogeries";

// screen names
const homeName = 'Home';
const CatName = 'Catogeries';
const libName = 'Library';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home-sharp' : 'home-sharp';

          } else if (rn === CatName) {
            iconName = focused ? 'list' : 'list-outline';

          } else if (rn === libName) {
            iconName = focused ? 'ios-library' : 'ios-library';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },tabBarStyle: { position: 'absolute' ,backgroundColor:"black",padding: 10, height: 60,},
        headerTitleStyle: {
            fontSize: 20,
            textAlign: 'justify',
          }

      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 4, fontSize: 10 },
        tabBarStyle: { padding: 56, height: 50}
      }}>

      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={CatName} component={Catogeries} />
      <Tab.Screen name={libName} component={Library} />

    </Tab.Navigator>
  </NavigationContainer>
  );
};



export default TabBar;