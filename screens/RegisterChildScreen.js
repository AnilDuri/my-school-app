import React, { useLayoutEffect, useState } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';

import AddStudentModal from '../components/AddStudentModal';
import RegistrationConfirmationModal from '../components/RegistrationConfirmationModal';
import StudentContainer from '../components/StudentContainer';

const RegisterChildScreen = ({ navigation }) => {
    const students = useSelector((state) => state.students.students);
    const [modalVisible, setModalVisible] = useState(false);
    const [registrationModalVisible, setRegistrationModalVisible] = useState(false);

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
                                    return (<StudentContainer studentData={itemData} />)
                                }}
                            />
                        }
                    </View>
                </View>
                <View style={styles.actionContainer}>
                    <Pressable onPress={() => setRegistrationModalVisible(true)} style={styles.button}>
                        <Text style={styles.buttonText}>
                            Submit
                        </Text>
                    </Pressable>
                </View>
            </View>
            <AddStudentModal setModalVisible={setModalVisible} modalVisible={modalVisible} />
            <RegistrationConfirmationModal setModalVisible={setRegistrationModalVisible} modalVisible={registrationModalVisible} />
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
        marginHorizontal: 20
    },
    actionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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