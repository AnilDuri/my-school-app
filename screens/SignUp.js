import React, { useLayoutEffect, useState } from 'react'
import { useEffect } from 'react';
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { SelectList } from 'react-native-dropdown-select-list'

import { supabase } from '../supabase/supabase'

const SignUpScreen = ({ navigation }) => {
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTintColor: 'white',
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: '#b4e369'
      }
    })
  }, [navigation]);

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) {
      console.log(error);
      return;
    }
    setLoading(false)
    navigation.navigate('registerChild');
  }

  useEffect(() => {
    const fetchSchools = async () => {
      const { data, errors } = await supabase.from('schools').select('name, id');
      if (errors) return;
      const formattedData = data.map((s, i) => ({ key: i, value: s.name, id: s.id }))
      setSchools(formattedData);
    }
    fetchSchools();
  }, [])
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
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            keyboardType="password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm Password"
            keyboardType="password"
            secureTextEntry={true}
          />
          <SelectList
            setSelected={(val) => setSelectedSchool(val)}
            data={schools}
            save="name" />
          {/* <DropDownPicker
            placeholder="Select a School"
            open={open}
            value={value}
            items={schools}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            disableBorderRadius={true}
            listMode="SCROLLVIEW"
            style={styles.picker}
            placeholderStyle={styles.pickerPlaceholder}
          /> */}
        </View>
        <View style={styles.actionContainer}>
          <Pressable onPress={signUpWithEmail} style={styles.button}>
            <Text style={styles.buttonText}>
              Sign Up
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
    marginHorizontal: 20
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
    marginTop: 6
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