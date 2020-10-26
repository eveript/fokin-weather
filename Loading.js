import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#886634',
    justifyContent: 'flex-end',
    paddingVertical: 100,
    paddingHorizontal: 30,
    // alignItems: 'center'
  },
  text: {
    color: '#2c2c2c',
    fontSize: 20
  }
});
