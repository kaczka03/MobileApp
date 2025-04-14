import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button, Dimensions, ImageBackground } from 'react-native';

const CarOfferScreen = () => {
  // Przykładowe dane samochodu
  const name = 'Toyota Corolla';
  const firstImage = 'https://images.pexels.com/photos/16767878/pexels-photo-16767878/free-photo-of-pojazd-pomarancza-pomaranczowy-samochod-sportowy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
  const secondImage = 'https://images.pexels.com/photos/4674338/pexels-photo-4674338.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
  const thirdImage = 'https://images.pexels.com/photos/3874330/pexels-photo-3874330.jpeg?auto=compress&cs=tinysrgb&w=300';
  const description = 'Toyota Corolla to popularny sedan, znany z niezawodności i oszczędności paliwa. Idealny do codziennych dojazdów oraz długich podróży.';
  const specs = {
    engine: '1.8L 4-cylindrowy',
    maxSpeed: '180 km/h',
    acceleration: '0-100 km/h w 9.5 s',
    color: 'Czarny',
  };
  const rentalPrice = '150 PLN/dzień';

  return (
    <ImageBackground
      source={require('@/assets/images/forest.png')} // Ścieżka do lokalnego obrazu tła
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Nazwa auta */}
        <Text style={styles.carName}>{name}</Text>

        {/* Przewijanie zdjęć w poziomie */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageContainer}>
          <Image source={{ uri: firstImage }} style={styles.carImage} />
          <Image source={{ uri: secondImage }} style={styles.carImage} />
          <Image source={{ uri: thirdImage }} style={styles.carImage} />
        </ScrollView>

        {/* Opis auta */}
        <Text style={styles.carDescription}>{description}</Text>

        {/* Dane techniczne */}
        <View style={styles.specsContainer}>
          <Text style={styles.specTitle}>Dane techniczne:</Text>
          <Text style={styles.specItem}>Silnik: {specs.engine}</Text>
          <Text style={styles.specItem}>Maksymalna prędkość: {specs.maxSpeed}</Text>
          <Text style={styles.specItem}>Przyspieszenie: {specs.acceleration}</Text>
          <Text style={styles.specItem}>Kolor: {specs.color}</Text>
        </View>

        {/* Cena wynajmu */}
        <Text style={styles.rentalPrice}>Cena wynajmu: {rentalPrice}</Text>

        {/* Przycisk Zarezerwuj */}
        <View style={styles.buttonContainer}>
          <Button title="Zarezerwuj" onPress={() => alert('Rezerwacja zakończona!')} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Zapewnia, że tło będzie odpowiednio skalowane
    justifyContent: 'center', // Ustawia zawartość na środku
    alignItems: 'center', // Ustawia zawartość na środku
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Przezroczyste tło, aby tekst był czytelny
  },
  carName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white', // Biały kolor tekstu
  },
  imageContainer: {
    marginBottom: 20,
  },
  carImage: {
    width: Dimensions.get('window').width - 40, // Szerokość dostosowana do szerokości ekranu minus padding
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  carDescription: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    color: 'white', // Biały kolor tekstu
  },
  specsContainer: {
    marginBottom: 20,
  },
  specTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // Biały kolor tekstu
  },
  specItem: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white', // Biały kolor tekstu
  },
  rentalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745', // Zielony kolor dla ceny
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default CarOfferScreen;
