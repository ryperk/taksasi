import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard, Button, Alert, TouchableOpacity } from 'react-native';
import CompInputText from '../../components/CompInputText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Config from 'react-native-config';
import CryptoJS from 'crypto-js';
import axios from 'axios';

const LoginScreen =  () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  connectDevApi = async () => {
    console.log("connect")
   await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      console.log( result)
  }

  handleLogin = async () => {

    const dataLogin = {
      email: 'dratnatiwi@gmail.com',
      pass: 'Adira2023',
      recaptcha: false,
    };

    const secretKey = Config.MOMOTOR_VARIABLE

    let datass = JSON.stringify(dataLogin)

    let encryptData = CryptoJS.AES.encrypt(datass, secretKey).toString();

    let secureData = JSON.stringify({
      dataLogin: encryptData
    })

    const requestOptionsModel = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: secureData
    };
    

    console.log("request", requestOptionsModel)

    const loginResponse =  await fetch(`${Config.MOMOTOR_API}/dealers/login`, requestOptionsModel)
      .then(response => response.json())
      .then(data => responseLogin = data.data)
      .catch(error => console.log(error))

      console.log(loginResponse)

  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.TextInput} onChangeText={(email) => setEmail(email)} name="user" placeholder='Email' />
      <TextInput style={styles.TextInput} onChangeText={(password) => setPassword(password)} secureTextEntry name="password" placeholder='Password' />
      <TouchableOpacity onPress={connectDevApi}>
        <Text style={styles.ButtonLogin}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    gap: 10,
    backgroundColor: 'white'
  },
  TextInput: {
    borderWidth: 1,
    backgroundColor: "#FFF",
    borderColor: "#DDD",
    paddingHorizontal: 16

  },
  ButtonLogin: {
    width: '100%',
    backgroundColor: 'blue',
    paddingVertical: 16,
    color: '#FFF',
    textAlign: 'center',
  }
})

export default LoginScreen