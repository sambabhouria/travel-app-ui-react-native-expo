import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ScreenProfile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}

export default ScreenProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
