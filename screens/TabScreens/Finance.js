import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Finance = () => {
  return (
    <View style={styles.container}>
      <Text>Finance</Text>
    </View>
  )
}

export default Finance

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })