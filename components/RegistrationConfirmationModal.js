import React from 'react'
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'

const RegistrationConfirmationModal = ({ modalVisible, navigateLogin }) => {
    return (
        <Modal
            animationType="slide"
            presentationStyle='overFullScreen'
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.registerContainer}>
                        <Text style={styles.successTitle}>Congratulations! Your request has successfully been sent to *School Name* </Text>
                        <Text style={styles.successSubtitle}>Once accepted you’ll be notified by email and can login to view your school portal.</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.buttonContainer}>
                            <Pressable
                                style={({ pressed }) => [styles.button, pressed && styles.pressed]}
                                onPress={() => navigateLogin()}
                            >
                                <Text style={styles.textStyle}>Return to Login</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </Modal >
    )
}

export default RegistrationConfirmationModal

const styles = StyleSheet.create({
    centeredView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        alignSelf: 'stretch',
        marginHorizontal: 30,
        backgroundColor: "lightgrey",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'hidden'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 15,
        alignSelf: 'stretch'
    },
    textStyle: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    registerContainer: {
        alignSelf: 'stretch',
        marginHorizontal: 20,
        marginVertical: 20,
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
        flexDirection: 'row',
        alignSelf: 'stretch',
    },
    pressed: {
        backgroundColor: '#a1a1a1'
    },
    successTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    successSubtitle: {
        fontSize: 14,
        textAlign: 'center'
    }
})