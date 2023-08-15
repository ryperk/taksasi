import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("email", email)
  console.log("password", password)

  const handleLogin = () => {
    // Alert.alert('Alert Title', 'My Alert Msg', [
    //   {
    //     text: 'Cancel',
    //     onPress: () => console.log('Cancel Pressed'),
    //     style: 'cancel',
    //   },
    //   {text: 'OK', onPress: () => console.log('OK Pressed')},
    // ]);
    // if (email == '' || password == '') {
    //   Alert.alert('Alert Title', 'Input your email and password')
    // } else {
    //   if (email == 'ryan' && password == '1234') {
    //     console.log("logged in");
    //     navigation.navigate('Home');
    //   } else {
    //     console.log("User not found")
    //   }
    // }
    navigation.navigate('Home');

  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Login</Text>
      <TextInput style={styles.TextInput} defaultValue={email} onChangeText={value => setEmail(value)} label="Email" placeholder='Email' />
      <TextInput style={styles.TextInput} defaultValue={password} onChangeText={value => setPassword(value)} label="Password" placeholder='Password' secureTextEntry />
      <Button title='Login' onPress={handleLogin} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    gap: 10
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 16

  }
})

export default LoginScreen