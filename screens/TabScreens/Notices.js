import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import NoticeComponent from '../../components/NoticeComponent'
import PageContainer from '../../components/PageContainer'
import SafeAreaViewContainer from '../../components/SafeAreaViewContainer'

const Notices = () => {
  return (
    <SafeAreaViewContainer>
      <PageContainer>
        <Text style={styles.title}>Notices</Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={NoticeComponent}
          keyExtractor={(item, index) => index}
        />
      </PageContainer>
    </SafeAreaViewContainer>
  )
}

export default Notices

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  }
})