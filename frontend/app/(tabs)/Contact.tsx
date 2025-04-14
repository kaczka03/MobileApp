import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Animated, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ExternalLink } from '@/components/ExternalLink';

const { width } = Dimensions.get('window');

const Contact = () => {
  const [position1] = useState(new Animated.Value(width));
  const [position2] = useState(new Animated.Value(width + 100));
  const [position3] = useState(new Animated.Value(width + 200));

  const animateIcon = (position: Animated.Value) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(position, {
          toValue: -100,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(position, {
          toValue: width,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    animateIcon(position1);
    animateIcon(position2);
    animateIcon(position3);
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#000' }}
      headerImage={
        <IconSymbol size={310} color="#fff" name="phone" style={styles.headerImage} />
      }
    >
      <View style={styles.iconContainer}>
        <Animated.View style={[styles.iconWrapper, { transform: [{ translateX: position1 }] }]}>
          <Text style={styles.icon}>🚗</Text>
        </Animated.View>
        <Animated.View style={[styles.iconWrapper, { transform: [{ translateX: position2 }] }]}>
          <Text style={styles.icon}>🚙</Text>
        </Animated.View>
        <Animated.View style={[styles.iconWrapper, { transform: [{ translateX: position3 }] }]}>
          <Text style={styles.icon}>🛺</Text>
        </Animated.View>
      </View>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>📞 Kontakt</ThemedText>
      </ThemedView>

      <ThemedText style={styles.infoText}>Skontaktuj się z jednym z naszych handlowców:</ThemedText>

      <Collapsible title="Jan Kowalski" style={styles.card}>
        <ThemedText>📞 +48 600 123 456</ThemedText>
      </Collapsible>

      <Collapsible title="Anna Nowak" style={styles.card}>
        <ThemedText>📞 +48 601 234 567</ThemedText>
      </Collapsible>

      <Collapsible title="Piotr Wiśniewski" style={styles.card}>
        <ThemedText>📞 +48 602 345 678</ThemedText>
      </Collapsible>

      <ExternalLink href="mailto:CarRent@wy.pl">
        <ThemedText type="link" style={styles.emailLink}>✉️ Napisz do nas</ThemedText>
      </ExternalLink>

      {/* Mapa Google */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 51.750472,
            longitude: 19.534083,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{ latitude: 51.750472, longitude: 19.534083 }}
            title="CarRent"
            description="Tutaj znajdziesz naszą siedzibę!"
          />
        </MapView>
      </View>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF', // Jasne tło błękitne
  },
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textShadowColor: 'rgba(15, 15, 15, 0.64)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconWrapper: {
    position: 'absolute',
  },
  icon: {
    fontSize: 60,
    color: '#FFD700', // Złote ikony
  },
  emailLink: {
    fontSize: 20,
    color: '#1E90FF',
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  mapContainer: {
    height: 300,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  map: {
    flex: 1,
  },
});

export default Contact;
