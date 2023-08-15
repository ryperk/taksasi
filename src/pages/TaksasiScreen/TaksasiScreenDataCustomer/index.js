import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataCustomer = ({ navigation }) => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    alamat: "",
    kodepos: ""
  })

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('taksasi-customer');
  //       console.log("value", JSON.parse(value))
  //       if (value !== null) {
  //         // value previously stored
  //       }
  //     } catch (e) {
  //       // error reading value
  //     }
  //   };
  //   getData();
  // }, [form])

  /**
   * Handle Submit Data Customer
   */
  handleSubmit = async () => {

    try {
      const jsonValue = JSON.stringify(form);
      await AsyncStorage.setItem('taksasi-customer', jsonValue);
    } catch (e) {
      // saving error
    }

    if (AsyncStorage) {
      const data = await AsyncStorage.getItem('taksasi-customer');
      console.log("data", data)
    }

    navigation.navigate('DataMotor')
  }

  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.form}>
          <Text style={style.heading}>Detail Customer</Text>
          <Text onPress={ () => navigation.navigate('Option') }>Select Brand</Text>
          <TextInput style={style.inputText} value={form.name} onChangeText={(name) => setForm({ ...form, name })} name="name" placeholder="Name" />
          <TextInput style={style.inputText} value={form.email} onChangeText={(email) => setForm({ ...form, email })} name="email" placeholder="Email" />
          <TextInput style={style.inputText} value={form.phone} onChangeText={(phone) => setForm({ ...form, phone })} name="hp" placeholder="No. Handphone" />
          <TextInput style={style.inputText} value={form.alamat} onChangeText={(alamat) => setForm({ ...form, alamat })} name="alamat" placeholder="Alamat" />
          <TextInput style={style.inputText} value={form.kodepos} onChangeText={(kodepos) => setForm({ ...form, kodepos })} name="kodepos" placeholder="Kodepos" />
          <TextInput style={style.inputText} value={form.name} onChangeText={(name) => setForm({ ...form, name })} name="name" placeholder="Name" />
          <TextInput style={style.inputText} value={form.email} onChangeText={(email) => setForm({ ...form, email })} name="email" placeholder="Email" />
          <TextInput style={style.inputText} value={form.phone} onChangeText={(phone) => setForm({ ...form, phone })} name="hp" placeholder="No. Handphone" />
          <TextInput style={style.inputText} value={form.alamat} onChangeText={(alamat) => setForm({ ...form, alamat })} name="alamat" placeholder="Alamat" />
          <TextInput style={style.inputText} value={form.kodepos} onChangeText={(kodepos) => setForm({ ...form, kodepos })} name="kodepos" placeholder="Kodepos" />
          <Button style={style.button} title="Lanjutkan" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F8F8F8',
    padding: 16,
    //justifyContent: 'center',

  },
  form: {
    gap: 10
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000'
  },
  inputText: {
    backgroundColor: "white",
    color: "#000",
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    paddingHorizontal: 16
  },
  button: {
    height: 20,
    paddingVertical: 10
  }
})

export default DataCustomer