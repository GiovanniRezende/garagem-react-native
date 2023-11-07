import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
// import BASE_URL from './src/config.js';

export default function Home() {
  const data = [
    {
      id: '1',
      // imageSource: require('image1.png'),
      title: 'Veículo',
      categoria: 'Sedan',
      marca: 'Toyota',
      modelo: 'Corolla',
      cor: 'Vermelho',
      acessorio: 'Ar condicionado',
    },
    {
      id: '2',
      // imageSource: require('image2.png'),
      title: 'Veículo',
      categoria: 'Hatchback',
      marca: 'Honda',
      modelo: 'Civic',
      cor: 'Azul',
      acessorio: 'GPS',
    },
    {
      id: '3',
      // imageSource: require('image3.png'),
      title: 'Veículo',
      categoria: 'SUV',
      marca: 'Ford',
      modelo: 'Escape',
      cor: 'Prata',
      acessorio: 'Teto solar',
    },
    {
      id: '4',
      // imageSource: require('image4.png'),
      title: 'Veículo',
      categoria: 'Sedan',
      marca: 'Hyundai',
      modelo: 'Elantra',
      cor: 'Preto',
      acessorio: 'Bancos de couro',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Garagem</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            categoria={item.categoria}
            marca={item.marca}
            modelo={item.modelo}
            cor={item.cor}
            acessorio={item.acessorio}
          />
        )}
      />
    </View>
  );
}

function Card({ title, categoria, marca, modelo, cor, acessorio }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardItem}>Categoria: {categoria}</Text>
      <Text style={styles.cardItem}>Marca: {marca}</Text>
      <Text style={styles.cardItem}>Modelo: {modelo}</Text>
      <Text style={styles.cardItem}>Cor: {cor}</Text>
      <Text style={styles.cardItem}>Acessório: {acessorio}</Text>
      {/* Adicione a imagem aqui se necessário */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#067345',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  cardTitle: {
    fontSize: 20, 
    fontWeight: 'bold',
  },
  cardItem: {
    fontSize: 16, 
    marginTop: 8,
  },
});
