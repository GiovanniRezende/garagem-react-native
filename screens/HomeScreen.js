import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const baseURL = 'https://garagem-back-dev-znah.3.us-1.fl0.io';

const GarageScreen = () => {
  const [vehicles, setVehicles] = useState([]);
  const [colors, setColors] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    loadVehicles();
    loadColors();
    loadAccessories();
    loadCategories();
  }, []);
  
  const loadVehicles = async () => {
    try {
      const response = await fetch(`${baseURL}/api/veiculos/`);
      const data = await response.json();
      
      setVehicles(data);
      
      data.forEach(async (vehicle) => {
        const imageUrl = await loadVehicleImage(vehicle.id);
        vehicle.imageUrl = imageUrl;
        setVehicles([...data]);
      });
    } catch (error) {
      console.error('Erro ao carregar veículos', error);
    }
  };
  
  const loadVehicleImage = async (vehicleId) => {
    try {
      const response = await fetch(`${baseURL}/api/veiculos/${vehicleId}/imagem/`);
      const data = await response.json();
      return data.image_url;
    } catch (error) {
      console.error(`Erro ao carregar imagem do veículo ${vehicleId}`, error);
      return '';
    }
  };
  
  const loadColors = async () => {
    try {
      const response = await fetch(`${baseURL}/api/cores/`);
      const data = await response.json();
      setColors(data);
    } catch (error) {
      console.error('Erro ao carregar cores', error);
    }
  };
  
  const loadAccessories = async () => {
    try {
      const response = await fetch(`${baseURL}/api/acessorios/`);
      const data = await response.json();
      setAccessories(data);
    } catch (error) {
      console.error('Erro ao carregar acessórios', error);
    }
  };
  
  const loadCategories = async () => {
    try {
      const response = await fetch(`${baseURL}/api/categorias/`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Erro ao carregar categorias', error);
    }
  };
  
  return (
    <View>
    <View style={styles.header}>
    <Text style={styles.headerText}>Garagem do Giovanni Gay</Text>
    </View>
    <View style={styles.cardContainer}>
    {vehicles.map((vehicle) => (
      <View key={vehicle.id} style={styles.card}>
      <Image source={{ uri: vehicle.image[0].file }} style={styles.image} />
      <Text>
      <Text style={styles.boldText}>Descrição:</Text> {vehicle.descricao}
      </Text>
      <Text>
      <Text style={styles.boldText}>Categoria:</Text> {categories.map((category) => category.descricao).join(', ')}
      </Text>
      <Text>
      <Text style={styles.boldText}>Cores:</Text> {colors.map((color) => color.descricao).join(', ')}
      </Text>
      <Text>
      <Text style={styles.boldText}>Ano:</Text> {vehicle.ano}
      </Text>
      <Text>
      <Text style={styles.boldText}>Preço:</Text> R$ {vehicle.preco}
      </Text>
      <Text>
      <Text style={styles.boldText}>Acessórios:</Text> {accessories.map((accessory) => accessory.descricao).join(', ')}
      </Text>
      </View>
      ))}
      </View>
      </View>
      );
    };
    
    const styles = StyleSheet.create({
      header: {
        textAlign: 'center',
        backgroundColor: '#333',
        color: 'white',
        padding: 20,
      },
      headerText: {
        color: 'white',
        textAlign: 'center',
        // fontSize: '20px', 
      },
      cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
      },
        card: {
          textAlign: 'center',
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 20,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          borderRadius: 10,
          marginTop: 20,
          width: 350,
        },
        image: {
          maxWidth: '100%',
          height: 200,
          resizeMode: 'cover',
        },
        boldText: {
          fontWeight: 'bold',
        },
      },
    );
      
      export default GarageScreen;
      