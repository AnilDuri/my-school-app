import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NoticeComponent = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.newsImage}>
        <Text>Image Here</Text>
      </View>
      <View style={styles.itemTextContainer}>
        <Text numberOfLines={1} style={styles.itemTitle}>Holiday 1</Text>
        <Text numberOfLines={1} style={styles.itemSubtitle}>Welcome to the new year</Text>
      </View>
    </View>
  )
}

export default NoticeComponent

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
      },
      newsImage: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
      },
      itemTextContainer: {
        flex: 1,
      },
      itemTitle: {
        fontSize: 20,
      },
      itemSubtitle: {
        fontWeight: '200'
      },
})