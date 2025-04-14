import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function InsurancePricing() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Cennik Ubezpieczeń do Wynajmu Samochodów</Text>
    
          {/* Ubezpieczenie od uszkodzeń */}
          <View style={styles.insuranceCard}>
            <Text style={styles.cardTitle}>Ubezpieczenie od uszkodzeń (CDW)</Text>
            <Text style={styles.price}>50 PLN/doba</Text>
            <Text style={styles.description}>
              Pokrywa koszty naprawy pojazdu w przypadku uszkodzenia. Obejmuje zniszczenia mechaniczne oraz szkody wynikłe z wypadków.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Dodaj do wynajmu</Text>
            </TouchableOpacity>
          </View>
    
          {/* Ubezpieczenie od kradzieży */}
          <View style={styles.insuranceCard}>
            <Text style={styles.cardTitle}>Ubezpieczenie od kradzieży (THW)</Text>
            <Text style={styles.price}>40 PLN/doba</Text>
            <Text style={styles.description}>
              Chroni przed stratą pojazdu w przypadku kradzieży. Obejmuje również kradzież części pojazdu.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Dodaj do wynajmu</Text>
            </TouchableOpacity>
          </View>
    
          {/* Ubezpieczenie od wypadków pasażerów */}
          <View style={styles.insuranceCard}>
            <Text style={styles.cardTitle}>Ubezpieczenie od wypadków pasażerów (PAI)</Text>
            <Text style={styles.price}>20 PLN/doba</Text>
            <Text style={styles.description}>
              Zapewnia ochronę zdrowia pasażerów w przypadku wypadku. Obejmuje odszkodowanie za uszczerbek na zdrowiu.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Dodaj do wynajmu</Text>
            </TouchableOpacity>
          </View>
    
          {/* Ubezpieczenie na wypadek utraty kluczy */}
          <View style={styles.insuranceCard}>
            <Text style={styles.cardTitle}>Ubezpieczenie na wypadek utraty kluczy</Text>
            <Text style={styles.price}>10 PLN/doba</Text>
            <Text style={styles.description}>
              Pokrywa koszty związane z utratą kluczy do pojazdu. Obejmuje także wymianę zamka, jeśli to konieczne.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Dodaj do wynajmu</Text>
            </TouchableOpacity>
          </View>
    
          {/* Ubezpieczenie na wypadek wypadku */}
          <View style={styles.insuranceCard}>
            <Text style={styles.cardTitle}>Ubezpieczenie na wypadek wypadku (SCDW)</Text>
            <Text style={styles.price}>80 PLN/doba</Text>
            <Text style={styles.description}>
              Ubezpieczenie obejmuje pełną ochronę w przypadku wypadku, w tym koszty naprawy pojazdu oraz pomoc drogową.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Dodaj do wynajmu</Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        padding: 20,
        backgroundColor: '#f0f4f8',
      },
      title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#34495e',
      },
      insuranceCard: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: '#2c3e50',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        borderLeftWidth: 5,
        borderLeftColor: '#3498db',
      },
      cardTitle: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 10,
        color: '#2c3e50',
      },
      price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#e74c3c',
        marginBottom: 10,
      },
      description: {
        fontSize: 16,
        color: '#7f8c8d',
        marginBottom: 20,
      },
      button: {
        backgroundColor: '#3498db',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#2980b9',
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
      },
    });