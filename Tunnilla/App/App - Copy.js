import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, View, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  // Location example
  
  const [location, setLocation] = useState(null); // State where location is saved

  useEffect( () => {
    
    /*Vaihtoehto 1:*/
    async function getLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('No permission to get location!');
        // Jos lupaa ei saada, tehdään paluu.
        return;
      };

      // Get location
      let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      setLocation(location);
      console.log('Location: ', location);
      /*
  Location:  Object {
    "coords": Object {
      "accuracy": 35,
      "altitude": 31.809810638427734,
      "altitudeAccuracy": 20.22120475769043,
      "heading": -1,
      "latitude": 60.18913952644865,
      "longitude": 24.951209610378104,
      "speed": -1,
    },
    "timestamp": 1677447630063.9583,
  }
    */
    } 
    getLocation();

    /* Vaihtoehto 2:*/ 
    /*(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('No permission to get location')
        return;
      };

      // Get location
      /* let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      setLocation(location);
      console.log('Location: ', location);
    })(); */
    
    // useEffectin sulkeminen
    }, []); 

  // Mapview example

  // Renderöidään käynnistyessä
  const initial = {
    latitude: 60.200692,
    longitude: 24.934302,
    latitudeDelta: 0.0322,
    longitudeDelta: 0.0221
  };

  const coordinates = {
    latitude: 60.201373,
    longitude: 24.934041
  };

  // Pinniä pitää klikata!!!
  return (
    <View style={ styles.container }>
      <MapView
        style={ styles.map }
        initialRegion={ initial }
      >
        <Marker coordinate={ coordinates } title='Haaga-Helia AMK' />
      </MapView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%"
  }


});