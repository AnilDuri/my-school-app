import React, { useLayoutEffect, useState } from 'react'
import { FlatList, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import StudentContainer from '../components/StudentContainer';
import { addStudent } from '../store/slices/students';

const RegisterChildScreen = ({ navigation }) => {
    const students = useSelector((state) => state.students.students);
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [yearGroup, setYearGroup] = useState();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: '',
            headerTintColor: 'white',
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: '#b4e369'
            },
            headerRight: () => (
                <Pressable onPress={() => setModalVisible(true)}>
                    <Text style={styles.headerButton}>+</Text>
                </Pressable>
            ),
        })
    }, [navigation]);

    const addNewStudent = () => {
        dispatch(addStudent({ firstName, lastName, yearGroup }));
        setModalVisible(!modalVisible)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.safeAreaContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Add children that attend *school name*</Text>
                </View>
                <View style={styles.registeredStudentContainer}>
                    <View style={styles.listContainer}>
                        {students.length == 0 ?
                            <Text style={{ textAlign: 'center' }}>You haven't added any students yet, you can do so in the top right hand corner</Text> :
                            <FlatList
                                style={styles.list}
                                data={students}
                                keyExtractor={(item, index) => index}
                                renderItem={(itemData) => {
                                    return (<StudentContainer studentData={itemData.item} />)
                                }}
                            />
                        }
                    </View>
                </View>
                <View style={styles.actionContainer}>
                    <Pressable onPress={() => navigation.navigate('registerChild')} style={styles.button}>
                        <Text style={styles.buttonText}>
                            Submit
                        </Text>
                    </Pressable>
                </View>
            </View>
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
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => addNewStudent()}
                        >
                            <Text style={styles.textStyle}>Add Student</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default RegisterChildScreen

const styles = StyleSheet.create({
    headerButton: {
        fontSize: 30,
        color: 'white'
    },
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
    registeredStudentContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 16
    },
    actionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredView: {
        backgroundColor: 'rgba(220,220,200,0.8)',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        alignSelf: 'stretch',
        marginHorizontal: 30,
        backgroundColor: "lightgrey",
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    registerContainer: {
        alignSelf: 'stretch'
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
    listContainer: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30
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
    list: {
        alignSelf: 'stretch',
    }
})