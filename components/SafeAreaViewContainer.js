import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

const SafeAreaViewContainer = ({ children }) => {
    return (
        <SafeAreaView style={styles.SafeAreaViewContainer}>
            {children}
        </SafeAreaView>
    )
}

export default SafeAreaViewContainer

const styles = StyleSheet.create({
    SafeAreaViewContainer: {
        flex: 1,
    }
})