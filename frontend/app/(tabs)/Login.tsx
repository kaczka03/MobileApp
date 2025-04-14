import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Tu możesz dodać logikę do logowania użytkownika
    console.log('Zalogowano', { email, password });
  };

  return (
    <ImageBackground 
      source={require('@/assets/images/background.png')}  // Ścieżka do obrazu tła
      style={styles.background}
    >
      <View style={styles.container}>
        <ThemedView style={styles.formContainer}>
          <ThemedText type="title" style={styles.title}>Zaloguj się</ThemedText>

          {/* Etykieta i pole do wpisania e-maila */}
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Wpisz swój e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="rgb(0, 0, 0)" // Kolor placeholdera
          />

          {/* Etykieta i pole do wpisania hasła */}
          <Text style={styles.label}>Hasło</Text>
          <TextInput
            style={styles.input}
            placeholder="Wpisz swoje hasło"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="rgb(0, 0, 0)" // Kolor placeholdera
          />

          <Button mode="contained" style={styles.button} onPress={handleLogin}>
            Zaloguj się
          </Button>

          <Button
  mode="text"
  style={styles.link}
  onPress={() => console.log('Przejdź do rejestracji')}
  labelStyle={styles.linkText}  // Nadpisz kolor tekstu linku
>
  Nie masz konta? Zarejestruj się
</Button>
        </ThemedView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Upewnij się, że obraz będzie odpowiednio dopasowany
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(54, 54, 54, 0)', // Tło kontenera z przezroczystością
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,  // Maksymalna szerokość formularza
    padding: 30,
    borderRadius: 10,
    backgroundColor: 'rgba(22, 22, 22, 0.84)', // Tło formularza
    shadowColor: 'rgb(0, 0, 0)', // Cień
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8, // Dodaj cienie na Androidzie
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(12, 174, 238)', // Kolor tytułu
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgb(255, 255, 255)', // Kolor etykiet
    marginBottom: 8,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgb(0, 0, 0)', // Kolor obramowania pól
    backgroundColor: 'rgb(255, 255, 255)', // Tło pola
    color: 'rgb(255, 255, 255)', // Kolor tekstu w polu
  },
  button: {
    width: '100%',
    padding: 12,
    backgroundColor: 'rgb(12, 174, 238)',  // Kolor tła przycisku
    borderRadius: 5,
    marginBottom: 15,
    elevation: 2, 
     // Cień na przycisku
  },
  link: {
    marginTop: 10,
    color: 'rgb(0, 0, 0)',  // Kolor linku
    fontSize: 16,
    textAlign: 'center',
  },
  linkText: {
    color: 'rgb(12, 174, 238)',  // Kolor linku
  },
});
