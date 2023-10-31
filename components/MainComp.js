import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Card from '../components/CardComp'



const MainComp = ({ navigation }) => {
  const data = [
    { id: '1', name: 'Concessionária A', category: 'Sedans' },
    { id: '2', name: 'Concessionária B', category: 'SUVs' },
    { id: '3', name: 'Concessionária C', category: 'Esportivos' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.restaurantCard}
      onPress={() => navigation.navigate('Detalhes', { restaurant: item })}
    >
      <Text style={styles.restaurantName}>{item.name}</Text>
      <Text style={styles.restaurantCategory}>{item.category}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      
      <View style={styles.cardsContainer}>
        <Text style={styles.cardsTitle}>Outros Cards</Text>
        <View style={styles.cardsRow}>
         <Card />
        </View>
        <View style={styles.cardsRow}> 
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  restaurantCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  restaurantCategory: {
    fontSize: 16,
    color: '#777',
  },

});

export default MainComp;
