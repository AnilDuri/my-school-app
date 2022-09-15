import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

import FinanceComponent from '../../components/FinanceComponent'
import PageContainer from '../../components/PageContainer'
import SafeAreaViewContainer from '../../components/SafeAreaViewContainer'

const Finance = () => {
  return (
    <SafeAreaViewContainer>
      <PageContainer>
        <Text style={styles.title}>Finances</Text>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={FinanceComponent}
          keyExtractor={(item, index) => index}
        />
      </PageContainer>
    </SafeAreaViewContainer>
  )
}

export default Finance

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
})