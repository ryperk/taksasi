import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DataCustomer from "./TaksasiScreenDataCustomer";
import DataMotor from "./TaksasiScreenDataMotor";

const DataMotorOption = () => {
  return (
    <>
    </>
  )
}

const Stack = createNativeStackNavigator();

const Taksasi = () => {
  
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="DataMotor">
        {/* <Stack.Screen options={{ headerShown: false}} name='DataCustomer' component={DataCustomer} /> */}
        <Stack.Screen options={{ headerShown: false}} name='DataMotor' component={DataMotor} />
        {/* <Stack.Screen options={{ headerShown: false}} name='Option' component={DataMotorOption} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Taksasi