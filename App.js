import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello word!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',  
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',  
    fontSize: 24,
    fontWeight: 'bold',
  },
});
