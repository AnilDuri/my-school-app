import React, { useLayoutEffect, useState } from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

const SignUpScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Sandford School', value: 'apple' },
    { label: 'Lycee', value: 'banana' },
    { label: 'Sandford School', value: 'apples' },
    { label: 'Lycee', value: 'bananas' },
    { label: 'Sandford School', value: 'applez' },
    { label: 'Lycee', value: 'bananaz' },
    { label: 'Sandford School', value: 'applex' },
    { label: 'Lycee', value: 'bananax' },
  ]);
  const [text, onChangeText] = useState();
  const [number, onChangeNumber] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTintColor: 'white',
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: '#b4e369'
      }
    })
  }, [navigation])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.safeAreaContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Please fill out your details!</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={onChangeText}
            value={text}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Password"
            keyboardType="password"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Confirm Password"
            keyboardType="password"
          />
          <DropDownPicker
            placeholder="Select a School"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            disableBorderRadius={true}
            listMode="SCROLLVIEW"
            style={styles.picker}
            containerStyle={{borderWidth: 'red'}}
            placeholderStyle={styles.pickerPlaceholder}
          />
        </View>
        <View style={styles.actionContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Next
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaContainer: {
    display: 'flex',
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  inputContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 8
  },
  actionContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    alignSelf: 'stretch',
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 16,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 16
  },
  picker: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 0,
    marginTop: 5
  },
  pickerPlaceholder: {
    fontSize: 16,
    color: '#c2c2c2'
  },
  button: {
    borderRadius: 30,
    overflow: 'hidden',
    paddingHorizontal: 32,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: 'blue'
  },
  buttonText: {
    borderRadius: 30,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
})