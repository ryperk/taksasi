import React, { Component, useRef } from 'react';
import { Text, View, TouchableOpacity, Alert, ScrollView, Dimensions, Easing, TextInput } from 'react-native';
import { Colors, Fonts } from '../themes';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SelectOption = ({ value, hasValue, disabled, title, onPress, isValid , styleBox}) => {

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        //disabled={disabled}
        style={{ height: 56, overflow: 'visible', 
        }}>
        
        <View
          style={[{
            flex: 1,
            //borderColor: (isValid) == null ? Colors.secondaryGray5 : ( isValid ) ? 'green'  : 'red',
            backgroundColor: Colors.secondaryGray7,
            overflow: 'visible', 
            justifyContent: 'space-between', alignItems: 'center', 
            flexDirection: 'row', paddingHorizontal: 20
          }, styleBox]}
        >
          
          <Text style={{ ...Fonts.InterRegular, fontSize:16, color:Colors.secondaryGray2}}>{value}</Text>
          <View style={{ width: 16, height: 16 }}>
            <Ionicons
              name={"chevron-forward-outline"}
              style={{ position: 'relative' }}
              color={Colors.secondaryGray}
              size={16}
            />
          </View>
          {/* <Text style={{ ...Fonts.InterRegular, fontSize: 14, fontWeight: '400', color: '#001122', backgroundColor: '#F9F9F9', position: 'absolute', top: -10, left: 10, paddingHorizontal: 6 }}>{title}</Text> */}
        
        </View>
          
      </TouchableOpacity>
    </>
  )
}

export default SelectOption