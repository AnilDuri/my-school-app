import { FlatList, StyleSheet, Text, View } from 'react-native'

const HomeTab = () => {

  return (
    <View style={styles.pageContainer}>
      <View style={styles.holidayContainer}>
        <Text style={styles.headingText}>Coming Up</Text>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={holidayView}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View style={styles.newsContainer}>
        <Text style={styles.headingText}>Latest News</Text>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={newsView}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  )
}
export default HomeTab

const holidayView = () => {
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

const newsView = ({ navigation }) => {
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
  pageContainer: {
    flex: 1,
    padding: 20,
  },
  holidayContainer: {
    flex: 1,
    marginBottom: 10
  },
  newsContainer: {
    flex: 1,
  },
  headingText: {
    fontSize: 26,
    fontWeight: 'bold'
  },
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
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 20,
  },
  dateText: {
    fontSize: 20,
    color: 'white'
  },
  newsImage: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  }
});