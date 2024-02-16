import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SuccessMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4CAF50',  
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  message: {
    color: '#FFF',  
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SuccessMessage;
