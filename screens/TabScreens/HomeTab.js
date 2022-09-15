import { Feather } from '@expo/vector-icons';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const HomeTab = () => {

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.pageContainer}>
        <View style={styles.schoolContainer}>
          <Text style={styles.SchoolTitle}>Sandford International School</Text>
          <View style={styles.iconContainer}>
          <Feather name="user" size={25} color="white" />
          </View>
        </View>
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
    </SafeAreaView>
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
  safeAreaContainer: {
    flex: 1
  },
  pageContainer: {
    flex: 1,
    padding: 20,
  },
  schoolContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  holidayContainer: {
    flex: 1,
    marginBottom: 10
  },
  newsContainer: {
    flex: 1,
  },
  iconContainer: {
    height: 40,
    width: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginHorizontal: 5
  },
  SchoolTitle: {
    fontSize: 20,
    fontWeight: 'bold'
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
  itemSubtitle: {
    fontWeight:'200'
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