import React from 'react'
import { TouchableOpacity, Text, View, TextInput, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../themes';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CompInputText = (props) => {
  return (
    <TouchableOpacity style={styles.box} activeOpacity={0.8} onPress={props.onPress}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
        <View style={styles.dropDown}>
          {/* <Text style={{ ...Fonts.InterRegular, marginBottom: 5, fontSize: 12, color: '#666666' }}>{props.title}</Text> */}
          <Text style={{ ...Fonts.InterRegular, fontSize: 16 }}>{props.value}</Text>
        </View>
        <Ionicons name={"chevron-down-outline"} color={Colors.primaryBlue} size={16} />
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  dropDown: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'center'
  },
  box: {
    marginBottom: 7,
    backgroundColor: 'white',
    color: Colors.black,
    padding:14,
    //paddingHorizontal: 14,
    //paddingVertical:14,
    //height:70,
    borderRadius: 7
  }
})
export default CompInputText