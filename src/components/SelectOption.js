import React, { Component, useRef } from 'react';
import { Text, View, TouchableOpacity, Alert, ScrollView, Dimensions, Easing, TextInput } from 'react-native';
import { Colors, Fonts } from '../themes';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SelectOption = ({ value, hasValue, disabled, title , onPress}) => {

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        disabled={disabled}
        style={{ height: 56, overflow: 'visible' }}>
        <View
          style={{ flex: 1, borderRadius: 4,borderBottomWidth:1, borderColor: hasValue !== null ? '#d2d2d2' : '#D63C66', backgroundColor: '#FFF', overflow: 'visible', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16 }}
        >
          <Text style={{ ...Fonts.montserratRegular, fontSize: 14, color: '#001122' }}>{title}</Text>
          <View style={{ width: 20, height: 20 }}>
            <Ionicons
              name={"chevron-forward-outline"}
              style={{ position: 'relative' }}
              color={Colors.grey}
              size={20}
            />
          </View>
          {/* <Text style={{ ...Fonts.montserratRegular, fontSize: 14, fontWeight: '400', color: '#001122', backgroundColor: '#F9F9F9', position: 'absolute', top: -10, left: 10, paddingHorizontal: 6 }}>{title}</Text> */}
        </View>

      </TouchableOpacity>
    </>
  )
}

export default SelectOption