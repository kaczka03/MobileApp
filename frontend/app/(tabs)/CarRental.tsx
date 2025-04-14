import React from 'react';
import { StyleSheet, View, FlatList, Text, Image, ImageBackground } from 'react-native';

const carData = [
  {
    id: '1',
    name: 'Toyota Corolla',
    price: 100,
    image: 'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '2',
    name: 'Honda Civic',
    price: 120,
    image: 'https://images.pexels.com/photos/5381501/pexels-photo-5381501.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '3',
    name: 'Ford Focus',
    price: 110,
    image: 'https://images.pexels.com/photos/757185/pexels-photo-757185.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  // Możesz dodać więcej samochodów
];

export default function CarRentalScreen() {

  const renderCarItem = ({ item }) => {
    return (
      <View style={styles.carItem}>
        <Image source={{ uri: item.image }} style={styles.carImage} />
        <View style={styles.carDetails}>
          <Text style={styles.carName}>{item.name}</Text>
          <Text style={styles.carPrice}>{`Cena: $${item.price}/dni`}</Text>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground 
      source={require('@/assets/images/parking.png')}  // Ścieżka do obrazu tła
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Wybierz samochód</Text>

        {/* Lista samochodów */}
        <FlatList
          data={carData}
          renderItem={renderCarItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(78, 136, 190, 0)', // Jasnoszary z przezroczystością
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'rgb(255, 255, 255)', // Ciemnoszary
  },
  carItem: {
    flexDirection: 'row',
    backgroundColor: 'rgb(248, 248, 248)', // Biały
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    shadowColor: 'rgb(0, 0, 0)', // Czerń
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  carImage: {
    width: 100,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
  },
  carDetails: {
    justifyContent: 'center',
  },
  carName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgb(0, 238, 255)', // Ciemnoszary
  },
  carPrice: {
    fontSize: 16,
    color: 'rgb(136, 136, 136)', // Jasnoszary
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // Upewnij się, że obraz będzie odpowiednio dopasowany
    width: '100%',
    height: '100%',
  },
});
