import React, { useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux';

import { addStudent } from '../store/slices/students';

const AddStudentModal = ({ modalVisible, setModalVisible }) => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [yearGroup, setYearGroup] = useState('');

    const addNewStudent = () => {
        dispatch(addStudent({ firstName, lastName, yearGroup }));
        setFirstName('');
        setLastName('');
        setYearGroup('');
        setModalVisible(!modalVisible);
    }
    return (
        <Modal
            animationType="slide"
            presentationStyle='overFullScreen'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.registerContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="First Name"
                            onChangeText={setFirstName}
                            value={firstName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Last Name"
                            onChangeText={setLastName}
                            value={lastName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Year Group"
                            onChangeText={setYearGroup}
                            value={yearGroup}
                        />
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.buttonContainer}>
                            <Pressable
                                style={({ pressed }) => [styles.button, pressed && styles.pressed]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Pressable
                                style={({ pressed }) => [styles.button, pressed && styles.pressed]}
                                onPress={() => addNewStudent()}
                            >
                                <Text style={styles.textStyle}>Add Student</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </Modal >
    )
}

export default AddStudentModal

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
        // opacity: 0.7
        backgroundColor: '#a1a1a1'
    }
})