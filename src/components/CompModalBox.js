import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Easing, TextInput, TouchableOpacity, Keyboard } from "react-native";
import Modal from 'react-native-modalbox';
import { Colors, Fonts } from '../themes';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CompModalBox = ({ id, identifier, height, data, placeholder }) => {
  const [filter, setFilter] = useState("");
  const [initialData, setIntialData] = useState(data);

  handleSearch = (e) => {
    setFilter(e);
    if (e.length > 0) {
      let result = [...data].filter(obj => obj.paramDesc.toLowerCase().match(e.toLowerCase()))
      if (result.length > 0) {
        setTimeout(() => {
          Keyboard.dismiss();
        }, 3000)
      }
      setIntialData(result);
    } else {
      setIntialData(data);
    }
  }

  return (
    <Modal
      backdropPressToClose={true}
      backButtonClose={true}
      ref={id}
      style={{
        backgroundColor: 'rgba(0,0,0,0)',
        height: height, width: '100%'
      }}
      position={'bottom'}
      animationDuration={400}
      easing={Easing.elastic(0.5)}
    >
      <View style={{
        height: height,
        backgroundColor: Colors.white,
      }}>
        <View style={{ backgroundColor: Colors.secondaryGray6, paddingHorizontal: 16, paddingVertical: 15 }}>
          <Text style={{ ...Fonts.InterBold, fontSize: 18, color: Colors.primaryGray }}>{placeholder}</Text>
          <TextInput
            value={filter}
            onChangeText={handleSearch}
            placeholder="Search"
            style={{ backgroundColor: '#FFF', fontSize: 18, height: 60, borderColor: Colors.secondaryGray3, marginVertical: 10, paddingHorizontal: 16, borderRadius: 10 }} />
          {/* <Ionicons name={"chevron-down-outline"} color={Colors.primaryBlue} size={16} /> */}
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          <ScrollView>
            {
              initialData?.map(item => {
                return (
                  <TouchableOpacity key={item.paramId} onPress={() => handleSelect({ identifier, key: item.paramId, value: item.paramDesc })}>
                    <View style={{ borderColor: Colors.secondaryGray5, borderBottomWidth: 1, paddingVertical: 16 }}>
                      <Text style={{ ...Fonts.InterRegular, fontSize: 20, textAlign: 'center' }}>{item.paramDesc}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>

      </View>
    </Modal>
  )
}
export default CompModalBox;