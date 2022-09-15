import { Feather } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import HolidayComponent from '../../components/HolidayComponent';
import NoticeComponent from '../../components/NoticeComponent';
import PageContainer from '../../components/PageContainer';
import SafeAreaViewContainer from '../../components/SafeAreaViewContainer';

const HomeTab = () => {

  return (
    <SafeAreaViewContainer>
      <PageContainer>
        <View style={styles.schoolContainer}>
          <Text style={styles.schoolTitle}>Sandford International School</Text>
          <View style={styles.iconContainer}>
          <Feather name="user" size={25} color="white" />
          </View>
        </View>
        <View style={styles.holidayContainer}>
          <Text style={styles.headingText}>Coming Up</Text>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={HolidayComponent}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View style={styles.newsContainer}>
          <Text style={styles.headingText}>Latest News</Text>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={NoticeComponent}
            keyExtractor={(item, index) => index}
          />
        </View>
      </PageContainer>
    </SafeAreaViewContainer>
  )
}
export default HomeTab

const styles = StyleSheet.create({
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
  schoolTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  headingText: {
    fontSize: 26,
    fontWeight: 'bold'
  },
});