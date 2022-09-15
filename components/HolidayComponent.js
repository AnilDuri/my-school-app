import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HolidayComponent = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>15</Text>
      </View>
      <View style={styles.itemTextContainer}>
        <Text numberOfLines={1} style={styles.itemTitle}>School News Letter</Text>
      </View>
    </View>
  )
}

export default HolidayComponent

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
      },
      dateContainer: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60,
        marginRight: 20
      },
      dateText: {
        fontSize: 20,
        color: 'white'
      },
      itemTextContainer: {
        flex: 1,
      },
      itemTitle: {
        fontSize: 20,
      },
})