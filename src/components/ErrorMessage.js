import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 0, 0, 0.1)',  
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    color: 'red',
    fontSize: 16,
  },
});

export default ErrorMessage;
