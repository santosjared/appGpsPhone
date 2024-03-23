import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permiso denegado para acceder a la ubicación');
        return;
      }

      // Obtener la ubicación inicial
      getLocation();

      // Configurar intervalo para obtener la ubicación cada 5 segundos
      const interval = setInterval(() => {
        getLocation();
      }, 5000);

      return () => clearInterval(interval);
    })();
  }, []);

  const getLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      setErrorMsg('Error al obtener la ubicación');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      {location ? (
        <View>
          <Text>Latitud: {location.coords.latitude}</Text>
          <Text>Longitud: {location.coords.longitude}</Text>
          <SafeAreaView>
      <TextInput
        
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
     
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
        </View>
      ) : (
        <Text>Cargando...</Text>
      )}
    </View>
  );
};

export default LocationComponent;