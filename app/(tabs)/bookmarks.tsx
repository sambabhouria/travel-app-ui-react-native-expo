import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Screenbookmarks = () => {
  return (
    <View style={styles.container}>
      <Text>Bookmarks</Text>
    </View>
  )
}

export default Screenbookmarks

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
