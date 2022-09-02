import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text>Calendar</Text>
    </View>
  )
}

export default Calendar

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })