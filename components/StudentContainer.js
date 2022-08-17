import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux';

import { removeStudent } from '../store/slices/students';

const StudentContainer = ({ studentData }) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.studentContainer}>
            <View>
                <Text>Student Name: <Text style={styles.boldText}>{studentData.item.firstName} {studentData.item.lastName}</Text></Text>
                <Text>Year Group: <Text style={styles.boldText}>{studentData.item.yearGroup}</Text></Text>
            </View>
            <View>
                <Button onPress={() => dispatch(removeStudent(studentData.index))} title='X'></Button>
            </View>
        </View>
    )
}

export default StudentContainer

const styles = StyleSheet.create({
    studentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        alignSelf: 'stretch',
        borderRadius: 20,
        padding: 16,
        marginBottom: 10
    },
    boldText: {
        fontWeight: 'bold'
    }
})