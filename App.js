import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import LoginScreen from './src/pages/LoginScreen';
import HomeScreen from './src/pages/HomeScreen';
import Taksasi from './src/pages/TaksasiScreen';
import TodoList from './src/pages/TodoListScreen';


export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Taksasi'
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
          <Tab.Screen options={{ headerShown: false }} name="Todo" component={TodoList} />
          <Tab.Screen options={{ headerShown: false }} name="Taksasi" component={Taksasi} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

