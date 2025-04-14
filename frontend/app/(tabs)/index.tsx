import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  return (
    <ImageBackground 
      source={require('@/assets/images/background.png')}  
      style={styles.background}
    >
      <View style={styles.content}>
        <ThemedText type="title" style={styles.title}>Witaj</ThemedText>
        <ThemedText style={styles.description}>Potrzebujesz samochodu na weekendowy wypad lub służbową podróż? Nasza aplikacja umożliwia szybkie i wygodne wypożyczenie auta w kilka chwil!</ThemedText>

        <Button mode="contained" style={styles.button}>
          Zaloguj się
        </Button>
        <Button mode="contained" style={styles.button}>
          Zaloguj się
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    width: 200,
    padding: 12,
    backgroundColor: 'rgb(12, 174, 238)',
    borderRadius: 5,
    marginBottom: 15,
    elevation: 2,
  },
});
