import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';

const Register = () => {
  // Stany dla pól formularza
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Funkcja obsługi rejestracji
  const handleRegister = () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert('Błąd', 'Wszystkie pola muszą być wypełnione!');
      return;
    }
    Alert.alert('Sukces', `Konto dla ${firstName} ${lastName} zostało utworzone!`);
  };

  return (
    <ImageBackground source={require('@/assets/images/background.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Rejestracja</Text>

        {/* Pole Imię */}
        <TextInput
          style={styles.input}
          placeholder="Imię"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          value={firstName}
          onChangeText={setFirstName}
        />

        {/* Pole Nazwisko */}
        <TextInput
          style={styles.input}
          placeholder="Nazwisko"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          value={lastName}
          onChangeText={setLastName}
        />

        {/* Pole Email */}
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Pole Hasło */}
        <TextInput
          style={styles.input}
          placeholder="Hasło"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Przycisk rejestracji */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Zarejestruj się</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '85%',
    backgroundColor: 'rgba(0, 0, 0, 0.77)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'rgb(6, 194, 241)',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'rgb(255, 255, 255)',
    fontSize: 16,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'rgb(0, 153, 255)',
    padding: 12,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Register;
