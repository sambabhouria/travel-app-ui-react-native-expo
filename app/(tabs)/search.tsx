import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ScreenSearch = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  )
}

export default ScreenSearch

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
