import { StyleSheet, Text, View } from 'react-native'

const HomeTab = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

export default HomeTab

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})