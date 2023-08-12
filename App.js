import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';

const TodoList = () => {
  return (
    <></>
  )
}

const Taksasi = () => {
  return (
    <></>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Todo') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Taksasi') {
              iconName = focused ? 'create' : 'create-outline';
            }
            //You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#104e96',
          tabBarInactiveTintColor: 'gray',
        })}>
        {/* <Tab.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} /> */}
        {/* <Tab.Screen name="Home" options={{ headerShown: true }} component={HomeScreen} /> */}
        <Tab.Screen name="Todo" component={TodoList} />
        <Tab.Screen name="Taksasi" component={Taksasi} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

