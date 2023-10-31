import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Card;
