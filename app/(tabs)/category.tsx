import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ScreenCategory = () => {
  return (
    <View style={styles.container}>
      <Text>Category</Text>
    </View>
  )
}

export default ScreenCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
