import React, { useLayoutEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const RegisterChildScreen = ({ navigation }) => {

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
                    <Text style={styles.title}>Add children that attend *school name*</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text>Hello</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegisterChildScreen

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
        paddingHorizontal: 20
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 8
    },
})