import React, { useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, Switch, TextInput, Alert, StyleSheet } from 'react-native';

interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
  role: 'admin' | 'klient';
}

interface Car {
  id: number;
  brand: string;
  model: string;
  status: 'dostępny' | 'zajęty';
}

const initialUsers: User[] = [
  { id: 1, name: 'Jan Kowalski', email: 'jan@example.com', active: true, role: 'admin' },
  { id: 2, name: 'Anna Nowak', email: 'anna@example.com', active: false, role: 'klient' },
];

const initialCars: Car[] = [
  { id: 1, brand: 'Toyota', model: 'Corolla', status: 'dostępny' },
  { id: 2, brand: 'Honda', model: 'Civic', status: 'zajęty' },
];

const AdminPanel: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [cars, setCars] = useState<Car[]>(initialCars);
  const [usersExpanded, setUsersExpanded] = useState<boolean>(true);
  const [carsExpanded, setCarsExpanded] = useState<boolean>(true);
  const [addCarExpanded, setAddCarExpanded] = useState<boolean>(false);

  const [newCarBrand, setNewCarBrand] = useState('');
  const [newCarModel, setNewCarModel] = useState('');

  const toggleActiveStatus = (id: number) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const toggleRole = (id: number) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id
          ? { ...user, role: user.role === 'admin' ? 'klient' : 'admin' }
          : user
      )
    );
  };

  const addCar = () => {
    if (!newCarBrand.trim() || !newCarModel.trim()) {
      Alert.alert('Błąd', 'Proszę podać markę i model auta.');
      return;
    }

    const newCar: Car = {
      id: Date.now(),
      brand: newCarBrand.trim(),
      model: newCarModel.trim(),
      status: 'dostępny',
    };

    setCars(prev => [newCar, ...prev]);
    setNewCarBrand('');
    setNewCarModel('');
  };

  return (
    <FlatList
      data={[...users, ...cars]} // Skonsolidowane dane użytkowników i aut
      ListHeaderComponent={
        <>
          <Text style={styles.header}>Panel Admina</Text>

          {/* Sekcja: Użytkownicy */}
          <TouchableOpacity onPress={() => setUsersExpanded(prev => !prev)}>
            <Text style={styles.sectionTitle}>
              {usersExpanded ? '▼' : '▶'} Użytkownicy
            </Text>
          </TouchableOpacity>

          {usersExpanded && (
            <FlatList
              data={users}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.userCard}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.userEmail}>{item.email}</Text>

                    {/* Status użytkownika zmienia kolor w zależności od aktywności */}
                    <Text
                      style={[
                        styles.userStatus,
                        {
                          color: item.active ? 'rgb(18, 129, 23)' : 'rgb(255, 0, 0)', // Zielony dla aktywnego, czerwony dla nieaktywnego
                        },
                      ]}
                    >
                      Status: {item.active ? 'Aktywny' : 'Nieaktywny'}
                    </Text>

                    <Text style={styles.userRole}>Rola: {item.role}</Text>
                  </View>

                  <View style={styles.actions}>
                    <Text style={styles.label}>Aktywny</Text>
                    <Switch
                      value={item.active}
                      onValueChange={() => toggleActiveStatus(item.id)}
                    />

                    <TouchableOpacity
                      onPress={() => toggleRole(item.id)}
                      style={styles.roleButton}
                    >
                      <Text style={styles.roleButtonText}>
                        Zmień na {item.role === 'admin' ? 'klient' : 'admin'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              ListEmptyComponent={<Text style={styles.emptyText}>Brak użytkowników</Text>}
            />
          )}

          {/* Sekcja: Auta */}
          <TouchableOpacity onPress={() => setCarsExpanded(prev => !prev)}>
            <Text style={styles.sectionTitle}>
              {carsExpanded ? '▼' : '▶'} Auta
            </Text>
          </TouchableOpacity>

          {carsExpanded && (
            <FlatList
              data={cars}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.carCard}>
                  <Text style={styles.carText}>
                    {item.brand} {item.model}
                  </Text>
                  <Text style={styles.carStatus}>
                    Status: {item.status === 'dostępny' ? '✅ Dostępny' : '❌ Zajęty'}
                  </Text>
                </View>
              )}
              ListEmptyComponent={<Text style={styles.emptyText}>Brak aut</Text>}
            />
          )}

          {/* Sekcja: Dodawanie nowych aut */}
          <TouchableOpacity onPress={() => setAddCarExpanded(prev => !prev)}>
            <Text style={styles.sectionTitle}>
              {addCarExpanded ? '▼' : '▶'} Dodaj nowe auto
            </Text>
          </TouchableOpacity>

          {addCarExpanded && (
            <View style={styles.form}>
              <TextInput
                placeholder="Marka"
                value={newCarBrand}
                onChangeText={setNewCarBrand}
                style={styles.input}
              />
              <TextInput
                placeholder="Model"
                value={newCarModel}
                onChangeText={setNewCarModel}
                style={styles.input}
              />
              <TouchableOpacity onPress={addCar} style={styles.addButton}>
                <Text style={styles.addButtonText}>Dodaj auto</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      }
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.contentContainer} // Dla scrollowania
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1, // Dla scrollowania
    paddingBottom: 20, // Dodanie marginesu dolnego
    backgroundColor: 'rgb(255, 255, 255)', // Kolor tła na biały
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40, // Obniżenie headera
    textAlign: 'center',
    color: 'rgb(0, 0, 0)', // Kolor granatowy
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: 'rgb(0, 0, 0)', // Kolor niebieski
  },
  userCard: {
    backgroundColor: 'rgb(240, 244, 248)', // Jasny szary kolor dla karty użytkownika
    padding: 18,
    borderRadius: 12,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgb(51, 51, 51)', // Kolor czarny
  },
  userEmail: {
    color: 'rgb(85, 85, 85)', // Subtelny szary
    marginBottom: 6,
  },
  userStatus: {
    fontSize: 14,
  },
  userRole: {
    color: 'rgb(255, 112, 67)', // Czerwony dla roli
    fontSize: 14,
  },
  actions: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    color: 'rgb(59, 110, 52)', // Niebieski
  },
  roleButton: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'rgb(102, 187, 106)', // Zielony dla przycisku
    borderRadius: 6,
  },
  roleButtonText: {
    fontSize: 14,
    color: 'rgb(255, 255, 255)',
    fontWeight: 'bold',
  },
  carCard: {
    backgroundColor: 'rgb(240, 244, 248)', // Kolor tła karty auta
    padding: 18,
    borderRadius: 12,
    marginBottom: 18,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
  },
  carText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgb(51, 51, 51)', // Kolor czarny
  },
  carStatus: {
    color: 'rgb(0, 122, 255)', // Niebieski dla statusu auta
    fontSize: 14,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgb(128, 128, 128)',
  },
  form: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgb(200, 200, 200)',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'rgb(34, 139, 34)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AdminPanel;
