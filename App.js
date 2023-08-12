import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
      <Tab.Navigator>
        {/* <Tab.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} /> */}
        <Tab.Screen name="Home" options={{ headerShown: true }} component={HomeScreen} />
        <Tab.Screen name="Todo" component={TodoList} />
        <Tab.Screen name="Taksasi" component={Taksasi} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

