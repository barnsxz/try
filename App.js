// App.js

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// Import the ListView component (ensure the path is correct)
import ScrollView from './ScrollView';  // Adjust the path if necessary

export default function App() {
  return (
    <View style={styles.container}>
      {/* Render the ListView component */}
      <ScrollView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
