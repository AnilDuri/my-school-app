import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import HolidayComponent from '../../components/HolidayComponent'
import PageContainer from '../../components/PageContainer'
import SafeAreaViewContainer from '../../components/SafeAreaViewContainer'

const Calendar = () => {
  return (
    <SafeAreaViewContainer>
      <PageContainer>
        <Text style={styles.title}>Calendar</Text>
        <View style={styles.container}>
          <Text>Calendar Widget Goes Here</Text>
        </View>
        <View style={styles.holidayContainer}>
          <Text style={styles.headingText}>Coming Up</Text>
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={HolidayComponent}
            keyExtractor={(item, index) => index}
          />
        </View>
      </PageContainer>
    </SafeAreaViewContainer>
  )
}

export default Calendar

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    marginVertical: 20
  },
  headingText: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  holidayContainer: {
    flex: 1,
    marginBottom: 10
  },
})