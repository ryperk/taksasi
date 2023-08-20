import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, KeyboardAvoidingView, Text, StyleSheet, Keyboard, TextInput, Platform, Alert, SafeAreaView, Dimensions, Easing, ScrollView } from 'react-native';
import { Colors, Fonts } from '../../../themes';
import { getRequest, postRequest } from '../../../lib/data';
import CompInputText from "../../../components/CompInputText";
import CompModalBox from "../../../components/CompModalBox";

const DataMotor = () => {

	// Initial Window
	const { width, height } = Dimensions.get('window');
	const [keyboardHeight, setKeyboardHeight] = useState(0);
	const [filter, setFilter] = useState("");

	// Initial Data
	const [dataBrand, setDataBrand] = useState([]);

	const [dataTipe, setDataTipe] = useState([
		{ 'paramId': 'T01', 'paramDesc': 'Bebek' },
		{ 'paramId': 'T02', 'paramDesc': 'Matic' },
		{ 'paramId': 'T03', 'paramDesc': 'Sport' },
		{ 'paramId': 'T04', 'paramDesc': 'Premium' }
	]);

	const [dataModel, setDataModel] = useState([
		{ 'paramId': 'M01', 'paramDesc': 'M01' },
		{ 'paramId': 'M02', 'paramDesc': 'M02' },
		{ 'paramId': 'M03', 'paramDesc': 'M03' },
		{ 'paramId': 'M04', 'paramDesc': 'M04' }
	]);

	// Reference ID
	const brandModal = useRef(null);
	const tipeModal = useRef(null);
	const modelModal = useRef(null);

	const [form, setForm] = useState({
		brand: { value: null, isValid: null },
		tipe: { value: null, isValid: null },
		model: { value: null, isValid: null },
		year: { value: null, isValid: null },
		color: { value: null, isValid: null }
	});

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
			console.log("keyboard show", e)
			//setKeyboardHeight(e.endCoordinates.height);
		});

		const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
			console.log("keyboard hide")
			//setKeyboardHeight(0);
		});

		return () => {
			keyboardDidShowListener.remove();
			keyboardDidHideListener.remove();
		};
	}, []);

	useEffect(() => {

		// Initiate Brand
		async function getBrand() {
		  const brand = await postRequest('clar/digital-taksasi/get-object-brand', {
		    "groupCode": "001",
		    "objtCode": "002"
		  });
		  console.log("brand list", brand)
		  setDataBrand(brand)
		}
		getBrand();

	}, [])


	handleSelect = (e) => {
		console.log("select item", e);
		switch (e.identifier) {
			case 'brand':
				setForm({ ...form, brand: { value: e.value } })
				brandModal.current.close();
				break;
			case 'tipe':
				setForm({ ...form, tipe: { value: e.value } })
				tipeModal.current.close();
				break;
			case 'model':
				setForm({ ...form, model: { value: e.value } })
				modelModal.current.close();
				break;

			default:
				break;
		}

	}

	//console.log("form", form)

	return (

		<>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 0}
				keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
			>
				<ScrollView
					contentContainerStyle={styles.scrollContainer}
				>
					<View style={[{ paddingHorizontal: 16 }, styles.container]}>

						<View style={{ marginVertical: 14, gap: 10 }}>
							<Text style={{ ...Fonts.Regular, fontSize: 14, color: Colors.primaryGray2 }}>Langkah 1 dari 3</Text>
							<Text style={{ ...Fonts.InterBold, fontSize: 24, color: "#000" }}>Data Motor</Text>
							{/* <Text style={{ ...Fonts.Regular, fontSize: 16, color: "#000" }}>Masukan data motor yang akan ditaksasi</Text> */}
						</View>

						{/* <View style={{marginBottom:16}}>	
						<SelectOption
							title={"Brand"}
							value={form.brand.value !== null ? form.brand.value : "Pilih Brand"}
							onPress={() => brandModal.current.open()}
							hasValue={form.brand.value}
							//isValid={form.brand.isValid}
						/>

						<SelectOption
							title={"Type"}
							value={form.tipe.value !== null ? form.tipe.value : "Pilih Type"}
							onPress={() => tipeModal.current.open()}
							hasValue={form.tipe.value}
							//isValid={form.tipe.isValid}
							
						/>

						<SelectOption
							title={"Model"}
							value={form.model.value !== null ? form.model.value : "Pilih Model"}
							onPress={() => modelModal.current.open()}
							hasValue={form.model.value}
							//isValid={form.model.isValid}
							
						/>

						<SelectOption title={"Tahun"} value={form.year.value !== null ? form.year.value : "Pilih Tahun"}
							

						/>
						<SelectOption value={form.color.value !== null ? form.color.value : "Pilih Warna"} title="Brand"
							
						/>
						</View> */}
						<CompInputText title="Brand" filter={filter} value={(form.brand.value !== null) ? form.brand.value : "Pilih Brand"} onPress={() => brandModal.current.open()} />
						<CompInputText title="Model" value={(form.model.value !== null) ? form.model.value : "Pilih Model"} onPress={() => modelModal.current.open()} />
						<CompInputText title="Type" value={(form.tipe.value !== null) ? form.tipe.value : "Pilih Type"} onPress={() => tipeModal.current.open()} />

						<CompInputText title="Tahun" value="Pilih Tahun" />

						<TextInput title="Plat No" placeholder="Plat No." style={styles.inputText} />
						<TextInput title="Plat No" placeholder="Plat No." style={styles.inputText} />
						<TextInput title="Plat No" placeholder="Plat No." style={styles.inputText} />
						<TextInput title="Plat No" placeholder="Plat No." style={styles.inputText} />
						<TextInput title="Plat No" placeholder="Plat No." style={styles.inputText} />
						<TextInput title="Plat No" placeholder="Plat No." style={styles.inputText} />


						{/* <View style={{ height: keyboardHeight, backgroundColor: 'red' }} /> */}
					</View>
				</ScrollView>

			</KeyboardAvoidingView>


			<CompModalBox placeholder="Pilih Brand" height={height - 100} identifier='brand' id={brandModal} data={dataBrand} />
			<CompModalBox placeholder="Pilih Tipe" height={height / 2} identifier='tipe' id={tipeModal} data={dataTipe} />
			<CompModalBox placeholder="Pilih Model" height={height / 2} identifier='model' id={modelModal} data={dataModel} />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#f5f5f5'
	},
	scrollContainer: {
		flexGrow: 1,
		justifyContent: 'center',
		backgroundColor: '#f5f5f5'
	},
	inputText: {
		marginBottom: 10, backgroundColor: "#FFF", color: Colors.black, borderRadius: 10,
		paddingHorizontal: 16
	}
})

export default DataMotor