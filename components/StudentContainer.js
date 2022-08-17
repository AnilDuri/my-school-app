import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const StudentContainer = ({ studentData }) => {
    console.log(studentData);
    return (
        <View style={styles.studentContainer}>
            <View>
                <Text>Student Name: <Text style={styles.boldText}>{studentData.firstName} {studentData.lastName}</Text></Text>
                <Text>Year Group: <Text style={styles.boldText}>{studentData.yearGroup}</Text></Text>
            </View>
            <View>
                <Button title='X'></Button>
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
        padding: 16
    },
    boldText: {
        fontWeight: 'bold'
    }
})