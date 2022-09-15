import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PageContainer = ({children}) => {
  return (
    <View style={styles.pageContainer}>
        {children}
    </View>
  )
}

export default PageContainer

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        padding: 20
    }
})