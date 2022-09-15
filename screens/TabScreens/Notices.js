import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Notices = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Notices</Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={newsView}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  )
}

export default Notices

const newsView = () => {
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

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
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