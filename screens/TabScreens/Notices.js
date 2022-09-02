import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Notices = () => {
  return (
    <View style={styles.container}>
      <Text>Notices</Text>
    </View>
  )
}

export default Notices

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })