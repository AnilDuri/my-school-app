import React, { useState } from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

const LoginScreen = ({ navigation }) => {
    const [text, onChangeText] = useState();
    const [number, onChangeNumber] = useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.safeAreaContainer}>
                <View style={styles.spaceDivider}></View>
                <View style={styles.contentContainer}>
                    <View style={[styles.contentSection, { justifyContent: 'center' }]}>
                        <Text style={styles.title}>My School App</Text>
                    </View>
                    <View style={styles.contentSection}>
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
                        <View style={styles.forgotPasswordContainer}>
                            <Pressable onPress={() => navigation.navigate('forgotPassword')} style={({ pressed }) => [styles.forgotPassword, pressed && styles.pressed]}>
                                <Text>Forgot Password?</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.contentSection}>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>
                                Login
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('signUp')} style={({ pressed }) => [pressed && styles.pressed]}>
                            <Text>Sign Up</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.spaceDivider}></View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b4e369'
    },
    safeAreaContainer: {
        display: 'flex',
        flex: 1,
    },
    contentContainer: {
        flex: 3,
        alignSelf: 'stretch',
        paddingHorizontal: 20,
    },
    spaceDivider: {
        flex: 1
    },
    contentSection: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
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
    forgotPassword: {
        alignSelf: 'flex-end',
        fontSize: 16
    },
    buttonText: {
        borderRadius: 30,
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
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
    forgotPasswordContainer: {
        alignSelf: 'stretch',
    },
    pressed: {
        opacity: 0.7
    }
})