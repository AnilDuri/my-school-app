import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const FinanceComponent = () => {
    return (
        <View style={styles.financeItemContainer}>
            <Text style={styles.itemHeader}>Term 1 Fee - 2022</Text>
            <View style={styles.textContainer}>
                <View>
                    <Text>Status: Pending Payment</Text>
                    <Text>Student: Adam Duri</Text>
                </View>
                <Pressable>
                    <AntDesign name="plus" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    )
}

export default FinanceComponent

const styles = StyleSheet.create({
    itemHeader: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    financeItemContainer: {
        marginVertical: 15,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})