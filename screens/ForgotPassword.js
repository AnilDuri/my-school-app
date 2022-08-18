import React, { useLayoutEffect, useState } from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

import ForgotPasswordLinkConfirmationModal from '../components/ForgotPasswordLinkConfirmationModal';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [resetConfirmationModalVisible, setResetConfirmationModalVisible] = useState(false);

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.safeAreaContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.forgotTitle}>Have you forgotten your password?</Text>
        </View>
        <Text style={styles.forgotSubtitle}>Enter your email below and we’ll send a link to your email to reset your password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.actionContainer}>
          <Pressable onPress={() => setResetConfirmationModalVisible(true)} style={styles.button}>
            <Text style={styles.buttonText}>
              Send Link
            </Text>
          </Pressable>
        </View>
      </View>
      <ForgotPasswordLinkConfirmationModal closeModal={setResetConfirmationModalVisible} modalVisible={resetConfirmationModalVisible} />
    </SafeAreaView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4e369'
  },
  safeAreaContainer: {
    flex: 1,
    padding: 20
  },
  titleContainer: {
    width: '80%',
    marginVertical: 10
  },
  forgotTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  forgotSubtitle: {
    fontSize: 16
  },
  inputContainer: {
    alignSelf: 'stretch',
    marginVertical: 20
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
  actionContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
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