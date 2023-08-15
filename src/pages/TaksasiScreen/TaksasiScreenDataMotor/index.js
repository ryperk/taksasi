import React, { useEffect, useState, useCallback, useRef } from "react";
import { Button, View, KeyboardAvoidingView, Text, StyleSheet, TextInput, Alert, SafeAreaView, Dimensions, Easing } from 'react-native';
import SelectOption from "../../../components/SelectOption";
import Modal from 'react-native-modalbox';
import { Colors, Fonts } from '../../../themes';

const DataMotor = () => {

    const brandModal = useRef(null)

    const { width, height } = Dimensions.get('window');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior={''} style={{ flex: 1, backgroundColor: '#FFF', }}>

                <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
                    <Text style={{ fontSize: 12, color: "#000", marginBottom: 10 }}>Langkah 1 dari 3</Text>
                    <Text style={{ fontSize: 18, fontWeight: '700', color: "#000" }}>Data Motor</Text>
                    <Text style={{ fontSize: 16 }}>Masukan data motor yang akan ditaksasi</Text>
                </View>

                <SelectOption value="brand" title="Brand" onPress={() => brandModal.current.open()} />
                <SelectOption value="brand" title="Brand" />
                <SelectOption value="brand" title="Brand" />
                <SelectOption value="brand" title="Brand" />

                <Modal
                    backdropPressToClose={true}
                    backButtonClose={true}
                    ref={brandModal}
                    style={{
                        backgroundColor: 'rgba(0,0,0,0)',
                        height: height / 2, width: '100%'
                    }}
                    position={'bottom'}
                    animationDuration={400}
                    easing={Easing.elastic(0.5)}
                >
                    <View style={{ height: height, width: '100%', backgroundColor: Colors.white, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                        <View style={{ width: '100%', paddingHorizontal: 14, paddingTop: 16, paddingBottom: 8 }}>
                            <Text>Content Modal</Text>
                        </View>
                    </View>
                </Modal>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    customComponentContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    text: {
        marginBottom: 20,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tinyLogo: {
        width: 20,
        height: 20,
    },

    containerStyle: {
        flex: 1,
    },
    spacerStyle: {
        marginBottom: 15,
    },
    safeContainerStyle: {
        flex: 1,
        margin: 20,
        //justifyContent: "center",
    },
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        //padding: 16,
        //justifyContent: 'center'
    },
    form: {

    },
    inputText: {
        backgroundColor: "white",
        color: "#000",
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 4,
        paddingHorizontal: 16
    },
    dropDown: {
        backgroundColor: "#FFF"
    }

})
export default DataMotor