import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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

export default function TabNavigator(){
    return(
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
          },headerShown: false 

      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 4, fontSize: 10 },
        tabBarStyle: { padding: 56, height: 50}
      }}
        
        
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Catogeries" component={Catogeries}/>

            <Tab.Screen name="Library" component={Library}/>


        </Tab.Navigator>
    )
}